export default {
	async fetch(request, env) {
	  const url = new URL(request.url);
	  const method = request.method.toUpperCase();
	  const pathname = url.pathname.replace(/^\/+/, ""); // 去掉开头的 /
	  const segments = pathname.split("/");

	  // 通用 CORS 头
	  const corsHeaders = {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
		"Access-Control-Allow-Headers": "Content-Type",
	  };

	  // 预检请求
	  if (method === "OPTIONS") {
		return new Response(null, { status: 204, headers: corsHeaders });
	  }

	  // ================== KV 功能路由 ==================
	  if (pathname.startsWith("kv/")) {
		const kvPath = pathname.replace("kv/", "");
		const kvSegments = kvPath.split("/");
		const key = kvSegments[0]; // 第一个路径段作为键名
		
		// KV Token 验证（使用现有的 token 系统）
		const tokenKey = url.searchParams.get("token");
		if (!tokenKey || (tokenKey !== env.READ_ACCESS_KEY && tokenKey !== env.WRITE_ACCESS_KEY)) {
		  return new Response("无效的 token", { status: 403, headers: corsHeaders });
		}

		if (!env.BOOKMARKS_KV) {
		  return new Response("KV 存储未配置", { status: 500, headers: corsHeaders });
		}

		try {
		  // GET - 读取 KV 值
		  if (method === "GET") {
			const value = await env.BOOKMARKS_KV.get(key);
			
			if (value === null) {
			  return new Response(JSON.stringify({ 
				error: "Key not found"
			  }), {
				status: 404,
				headers: { "Content-Type": "application/json", ...corsHeaders },
			  });
			}
			
			// 🔥 统一格式：返回 GitHub API 兼容格式
			try {
			  const jsonValue = JSON.parse(value);
			  const base64Data = btoa(unescape(encodeURIComponent(JSON.stringify(jsonValue))));
			  
			  return new Response(JSON.stringify({
				success: true,
				content: base64Data,
				data: jsonValue
			  }), {
				headers: { "Content-Type": "application/json", ...corsHeaders },
			  });
			} catch {
			  // 如果不是JSON，返回原始字符串的base64
			  const base64Data = btoa(unescape(encodeURIComponent(value)));
			  return new Response(JSON.stringify({
				success: true,
				content: base64Data,
				data: value
			  }), {
				headers: { "Content-Type": "application/json", ...corsHeaders },
			  });
			}
		  }

		  // POST - 创建/更新 KV 值（统一使用 GitHub API 格式）
		  else if (method === "POST") {
			if (tokenKey !== env.WRITE_ACCESS_KEY) {
			  return new Response("需要写入权限", { status: 403, headers: corsHeaders });
			}

			const body = await request.json();
			
			// 🔥 统一格式：支持 content 字段（base64编码）
			if (body.content === undefined && body.value === undefined) {
			  return new Response(JSON.stringify({
				error: "Missing content or value field",
				success: false
			  }), {
				status: 400,
				headers: { "Content-Type": "application/json", ...corsHeaders },
			  });
			}

			let valueToStore;
			
			// 优先使用 content 字段（统一格式）
			if (body.content !== undefined) {
			  try {
				// 解码 base64 数据
				const decodedData = decodeURIComponent(escape(atob(body.content)));
				valueToStore = decodedData;
				
				// 如果是 JSON 字符串，解析后重新序列化以确保格式一致
				try {
				  const jsonData = JSON.parse(decodedData);
				  valueToStore = JSON.stringify(jsonData);
				} catch {
				  // 如果不是 JSON，保持原样
				}
			  } catch (error) {
				return new Response(JSON.stringify({
				  error: "Invalid base64 content",
				  success: false
				}), {
				  status: 400,
				  headers: { "Content-Type": "application/json", ...corsHeaders },
				});
			  }
			} 
			// 向后兼容：支持旧的 value 字段
			else if (body.value !== undefined) {
			  valueToStore = typeof body.value === 'object' ? 
				JSON.stringify(body.value) : String(body.value);
			}
			
			await env.BOOKMARKS_KV.put(key, valueToStore);
			
			return new Response(JSON.stringify({
			  success: true,
			  message: "Key stored successfully",
			  key: key
			}), {
			  headers: { "Content-Type": "application/json", ...corsHeaders },
			});
		  }

		  // DELETE - 删除 KV 值
		  else if (method === "DELETE") {
			if (tokenKey !== env.WRITE_ACCESS_KEY) {
			  return new Response("需要写入权限", { status: 403, headers: corsHeaders });
			}

			await env.BOOKMARKS_KV.delete(key);
			
			return new Response(JSON.stringify({
			  success: true,
			  message: "Key deleted successfully",
			  key: key
			}), {
			  headers: { "Content-Type": "application/json", ...corsHeaders },
			});
		  }

		  else {
			return new Response("Method Not Allowed", { 
			  status: 405, 
			  headers: corsHeaders 
			});
		  }

		} catch (error) {
		  return new Response(JSON.stringify({
			error: error.message,
			success: false
		  }), {
			status: 500,
			headers: { "Content-Type": "application/json", ...corsHeaders },
		  });
		}
	  }

	  // ================== 密码验证逻辑 ==================
	  const DEFAULT_PASSWORD = "api6889692"; // 硬编码默认密码
	  const Password = env?.PASSWORD || DEFAULT_PASSWORD; // 优先使用环境变量

	  if (method === "POST" && pathname === "password") {
		try {
		  const { password } = await request.json();
		  const success = password?.trim() === Password; // 去掉空格再对比
		  return new Response(JSON.stringify({ success }), {
			status: 200,
			headers: { "Content-Type": "application/json", ...corsHeaders },
		  });
		} catch {
		  return new Response(JSON.stringify({ success: false }), {
			status: 400,
			headers: { "Content-Type": "application/json", ...corsHeaders },
		  });
		}
	  }

	  // ================== Token 验证 ==================
	  const tokenKey = url.searchParams.get("token");
	  let githubToken = null;
	  let permission = "none";

	  if (tokenKey === env.READ_ACCESS_KEY) {
		githubToken = env.READ_TOKEN;
		permission = "read";
	  } else if (tokenKey === env.WRITE_ACCESS_KEY) {
		githubToken = env.WRITE_TOKEN;
		permission = "write";
	  } else {
		return new Response("无效的 token", { status: 403, headers: corsHeaders });
	  }

	  if (!githubToken) {
		return new Response("Token 配置缺失", { status: 500, headers: corsHeaders });
	  }

	  // 路径检查：/{repo}/path/to/file
	  if (segments.length < 2) {
		return new Response("路径格式错误，应为 /{repo}/path/to/file", {
		  status: 400,
		  headers: corsHeaders,
		});
	  }

	  const [repo, ...filePathParts] = segments;
	  const filePath = filePathParts.join("/");
	  const branch = url.searchParams.get("branch") || "main"; // 默认 main，可自定义
	  const user = env.GH_NAME; // 固定用户名

	  if (!filePath) {
		return new Response("缺少文件路径", { status: 400, headers: corsHeaders });
	  }

	  // 写入文件（GitHub API - 保持原有格式）
	  if (method === "POST" && permission === "write") {
		let body;
		try {
		  body = await request.json();
		} catch {
		  return new Response("请求体不是有效的 JSON", { status: 400, headers: corsHeaders });
		}

		if (!body.content) {
		  return new Response("缺少 content 字段", { status: 400, headers: corsHeaders });
		}

		const githubApi = `https://api.github.com/repos/${user}/${repo}/contents/${filePath}`;

		// 获取文件 sha（用于更新）
		let sha = "";
		const checkResp = await fetch(`${githubApi}?ref=${branch}`, {
		  headers: { Authorization: `token ${githubToken}` },
		});
		if (checkResp.ok) {
		  const json = await checkResp.json();
		  sha = json.sha || "";
		}

		// 写入文件
		const response = await fetch(githubApi, {
		  method: "PUT",
		  headers: {
			Authorization: `token ${githubToken}`,
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify({
			message: `Update ${filePath} (${branch})`,
			content: body.content, // 已经是 base64 编码的数据
			branch,
			...(sha ? { sha } : {}),
		  }),
		});

		const result = await response.json();
		return new Response(JSON.stringify({ success: response.ok, result }), {
		  status: response.status,
		  headers: { "Content-Type": "application/json", ...corsHeaders },
		});
	  }

	  // 读取文件（GitHub API - 返回统一格式）
	  if (method === "GET" && (permission === "read" || permission === "write")) {
		const rawUrl = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${filePath}`;
		const response = await fetch(rawUrl, {
		  headers: { Authorization: `token ${githubToken}` },
		});

		if (response.ok) {
		  const content = await response.text();
		  const base64Data = btoa(unescape(encodeURIComponent(content)));
		  
		  // 尝试解析 JSON 数据
		  let jsonData = null;
		  try {
			jsonData = JSON.parse(content);
		  } catch {
			// 如果不是 JSON，保持原样
		  }
		  
		  return new Response(JSON.stringify({
			success: true,
			content: base64Data,
			data: jsonData || content
		  }), {
			headers: { "Content-Type": "application/json", ...corsHeaders },
		  });
		} else {
		  return new Response("文件获取失败，请检查路径或权限。", {
			status: response.status,
			headers: corsHeaders,
		  });
		}
	  }

	  // 默认伪装页
	  return Response.redirect("/public/", 302);
	},
  };
