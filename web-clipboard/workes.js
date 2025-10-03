//clipboard在线剪贴板
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname;
  if (path === '/') {
    return new Response(htmlTemplate, {
      headers: { 'Content-Type': 'text/html;charset=UTF-8' },
    });
  }
  if (path === '/save' && request.method === 'POST') {
    const content = await request.text();
    if (content) {
      await JTB.put("clipboard", content);
      return new Response('好的');
    } else {
      return new Response('内容为空', { status: 400 });
    }
  }
  if (path === '/read' && request.method === 'GET') {
    const content = await JTB.get("clipboard");
    return content
      ? new Response(content)
      : new Response('剪贴板为空', { status: 404 });
  }
  if (path === '/share' && request.method === 'POST') {
    const content = await JTB.get("clipboard");
    if (!content) {
      return new Response('剪贴板为空', { status: 400 });
    }
    const { maxViews, validMinutes } = await request.json();
    const shareId = generateUUID();
    const expireAt = validMinutes ? Date.now() + validMinutes * 60000 : null;
    const data = {
      content,
      maxViews,
      expireAt,
      views: 0,
      createdAt: Date.now()
    };
    await JTB.put(shareId, JSON.stringify(data), {
      expirationTtl: validMinutes ? validMinutes * 60 : undefined
    });
    // 添加至索引
    let indexRaw = await JTB.get("share_index");
    let index = indexRaw ? JSON.parse(indexRaw) : [];
    index.push({ id: shareId });
    await JTB.put("share_index", JSON.stringify(index));
    return new Response(JSON.stringify({
      shareUrl: `${url.origin}/s/${shareId}`
    }), { headers: { 'Content-Type': 'application/json' } });
  }
  if (path.startsWith('/s/') && request.method === 'GET') {
    const shareId = path.slice(3);
    const raw = await JTB.get(shareId);
    if (!raw) return new Response('无效或过期', { status: 404 });
    const data = JSON.parse(raw);
    if ((data.expireAt && Date.now() > data.expireAt) || (data.maxViews && data.views >= data.maxViews)) {
      await JTB.delete(shareId);
      return new Response('链接已失效', { status: 403 });
    }
    data.views++;
    await JTB.put(shareId, JSON.stringify(data));
    return new Response(data.content);
  }
if (path === '/shares' && request.method === 'GET') {
  const now = Date.now();
  const indexRaw = await JTB.get("share_index");
  const index = indexRaw ? JSON.parse(indexRaw) : [];
  const result = [];
  for (const { id } of index) {
    const raw = await JTB.get(id);
    if (!raw) continue;
    const data = JSON.parse(raw);
    if ((data.expireAt && now > data.expireAt) || (data.maxViews && data.views >= data.maxViews)) continue;
    result.push({
      url: `${url.origin}/s/${id}`,
      text: (data.content || '').slice(0, 28), // ✅ 添加 text 字段用于前端显示
      views: data.views,
      maxViews: data.maxViews ?? '不限',
      createdAt: data.createdAt
    });
  }
  return new Response(JSON.stringify(result), {
    headers: { 'Content-Type': 'application/json' }
  });
}
  if (path === '/manifest.json') {
    return new Response(manifestContent, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
  return new Response('未找到', { status: 404 });
}
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
const manifestContent = `{
  "name": "在线剪贴板",
  "short_name": "剪贴板",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#f4f4f4",
  "theme_color": "#007bff",
  "icons": [
    {
      "src": "https://img.xwyue.com/i/2025/01/06/677b63d2572db.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "https://img.xwyue.com/i/2025/01/06/677b63d2572db.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}`;
const htmlTemplate = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <title>在线剪贴板</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="https://img.xwyue.com/i/2025/01/06/677b63d2572db.png">
  <!-- iOS 添加到主屏幕的相关设置 -->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="在线剪贴板">
  <link rel="apple-touch-icon" href="https://img.xwyue.com/i/2025/01/06/677b63d2572db.png">
  <link rel="manifest" href="/manifest.json">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
  <style>
    body {
      font-family: 'Helvetica Neue', 'Arial', 'PingFang SC', 'Microsoft YaHei', sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      transition: background-color 0.5s ease;
    }
    body.dark-mode {
      background: linear-gradient(135deg, #333 0%, #222 100%);
    }
    h1 {
      color: #2980b9;
      margin-bottom: 20px;
      font-size: 2.5em;
      font-weight: 600;
	  text-align: center;
      opacity: 0;
      animation: fadeIn 1s ease-in-out forwards;
    }
    .dark-mode h1 {
      color: #74a7d2;
    }
	h3 {
    margin: 0px;
    }
    .container {
      background-color: rgba(255, 255, 255, 0.85);
      border-radius: 15px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      padding: 40px;
      width: 80%;
      max-width: 960px;
      transition: background-color 0.5s ease;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    }
    .dark-mode .container {
      background-color: rgba(51, 51, 51, 0.85);
      box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23CCCCCC' fill-opacity='0.1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    }
    textarea {
      width: calc(100% - 30px);
      height: 500px;
      margin-bottom: 20px;
      padding: 15px;
      border: none;
      border-radius: 10px;
      font-size: 18px;
      resize: vertical;
      color: #333;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      overflow: auto;
      transition: box-shadow 0.3s ease; /* 添加过渡效果 */
    }
    .dark-mode textarea {
      color: #eee;
      box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.1);
      background-color: #444;
    }
    textarea:focus {
      outline: none;
      box-shadow: 0 0 5px 2px #2980b9; /* 聚焦时添加更明显的阴影 */
    }
    .dark-mode textarea:focus {
      box-shadow: 0 0 5px 2px #74a7d2; /* 暗黑模式聚焦时添加更明显的阴影 */
    }
    button {
      background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
      color: white;
      border: 1px solid #2980b9; /* 添加细边框 */
      padding: 15px 30px;
      margin: 10px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 18px;
      transition: all 0.2s ease-in-out; /* 更快的过渡 */
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 移除悬停时的阴影 */
    }
    button:hover {
      background: linear-gradient(135deg, #2980b9 0%, #3498db 100%);
      transform: scale(1.05); /* 放大效果 */
    }
    button:active {
      transform: scale(0.95); /* 点击时缩小 */
      box-shadow: none;
    }
    button i {
      margin-right: 10px;
      font-size: 20px; /* 增大图标 */
    }
    .button-group {
      display: flex;
      justify-content: center;
    }
	    /* 分享列表 */
/* 分享弹窗容器整体布局为上下结构 */
.modal-content.share-list-modal {
  display: flex;
  flex-direction: column;
  height: 480px;
  overflow: hidden;
  position: relative;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  border-bottom: 1px solid #eee;
}
.modal-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
}
.close-list {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}
/* 滚动区域自动撑满剩余空间 */
#shareLinksContainer {
  flex: 1;
  overflow-y: auto;
  margin-top: 10px;
  padding-right: 4px;
  box-sizing: border-box;
}
/* 分页栏固定在底部 */
#paginationControls {
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #ddd;
  font-size: 14px;
  background-color: inherit;
}
#paginationControls button {
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 6px;
  background: #2980b9;
  color: white;
  border: none;
  cursor: pointer;
}
#paginationControls button:hover {
  background: #3498db;
}
#paginationControls button:disabled {
  background: #aaa;
  cursor: not-allowed;
}
#pageIndicator {
  font-weight: bold;
  min-width: 60px;
  text-align: center;
  font-size: 14px;
}
/* 暗黑模式支持 */
.dark-mode #paginationControls {
  color: #eee;
  border-top: 1px solid #666;
}
.dark-mode #paginationControls button {
  background: #555;
  color: #fff;
}
.dark-mode #paginationControls button:hover {
  background: #666;
}
	a {
	color: #0053bd;
    font-size: 1em;
	text-decoration: none;
    }
	.meta {
	color:#aaa;
    font-size: 0.8em;
	margin-top: 4px;
    }
    /* 媒体查询：针对小屏幕设备 (例如手机) */
    @media (max-width: 768px) {
      .container {
      width: 85%;
        padding: 20px;
      }
      textarea {
	  
        height: 300px;
        font-size: 16px;
      }
      button {
        padding: 12px 20px;
        font-size: 16px;
      }
      h1 {
        font-size: 2em;
      }
      .button-group{
        flex-wrap: wrap;
      }
    }
    /* 自定义滚动条 */
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
    .dark-mode ::-webkit-scrollbar-track {
      background: #333;
    }
    .dark-mode ::-webkit-scrollbar-thumb {
      background: #666;
    }
    .dark-mode ::-webkit-scrollbar-thumb:hover {
      background: #999;
    }
    /* 加载动画 */
    .loading {
      position: relative;
    }
    .loading::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 4px solid #fff;
      border-color: #fff transparent #fff transparent;
      animation: loading 1.2s linear infinite;
    }
    @keyframes loading {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
    .dark-mode .loading::after {
      border-color: #eee transparent #eee transparent;
    }
    /* 标题动画 */
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    /*分享*/
    .modal {
      display: none;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0, 0, 0, 0.4);
    }
    .modal-content {
      background-color: #fefefe;
      margin: 10% auto;
      padding: 20px;
      border: 1px solid #888;
      width: 100%;
      max-width: 400px;
	  max-height: 600px;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
    .dark-mode .modal-content {
      background-color: #444;
      color: #eee;
      border: 1px solid #666;
    }
    .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }
    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
    .dark-mode .close:hover,
    .dark-mode .close:focus {
      color: white;
    }
    .modal-content label {
      display: block;
      margin-bottom: 5px;
    }
    .modal-content input,
    .modal-content button {
      width: calc(100% - 20px);
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
    .dark-mode .modal-content input {
        background-color: #333;
        color: #fff;
        border: 1px solid #666;
    }
    .modal-content button {
      background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
      color: white;
      border: none;
      cursor: pointer;
    }
    .modal-content button:hover {
      background: linear-gradient(135deg, #2980b9 0%, #3498db 100%);
    }
    #shareLink {
      margin-top: 10px;
      word-break: break-all;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>在线剪贴板</h1>
    <textarea id="clipboard" placeholder="在此粘贴内容..."></textarea>
    <div class="button-group">
      <button id="saveBtn"><i class="fas fa-cloud-upload-alt"></i> 保存</button>
      <button id="readBtn"><i class="fas fa-cloud-download-alt"></i> 读取</button>
      <button id="copyBtn"><i class="fas fa-copy"></i> 复制</button>
      <button id="shareBtn"><i class="fas fa-share-alt"></i> 分享</button>
      <button id="listShareBtn"><i class="fas fa-list"></i> 列表</button>
    </div>
  </div>
  <div id="shareModal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <h3>设置分享限制</h3>
      <label for="maxViews">最大查看次数：</label>
      <input type="number" id="maxViews" placeholder="如 5" />
      <label for="validMinutes">有效时间（分钟）：</label>
      <input type="number" id="validMinutes" placeholder="如 60" />
      <button id="generateShareLink">生成分享链接</button>
      <div id="shareLink" style="margin-top:10px;"></div>
    </div>
  </div>
<div id="shareListModal" class="modal">
  <div class="modal-content share-list-modal">
    <div class="modal-header">
      <h3>分享链接</h3>
      <span class="close-list">&times;</span>
    </div>
    <!-- 滚动区域 -->
    <div id="shareLinksContainer">加载中...</div>
    <!-- 固定底部分页 -->
    <div id="paginationControls" style="display: none;">
      <button id="prevPage">上一页</button>
      <span id="pageIndicator">1 / 1</span>
      <button id="nextPage">下一页</button>
    </div>
  </div>
</div>
    </div>
  </div>
<script>
  const $ = id => document.getElementById(id);
  const clipboardTextarea = $('clipboard');
  const shareModal = $('shareModal');
  const shareListModal = $('shareListModal');
  $('saveBtn').addEventListener('click', async () => {
    const content = clipboardTextarea.value;
    if (!content) return alert('剪贴板为空！');
    const res = await fetch('/save', { method: 'POST', body: content });
    alert(await res.text());
  });
  $('readBtn').addEventListener('click', async () => {
    const res = await fetch('/read');
    clipboardTextarea.value = await res.text();
  });
  $('copyBtn').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(clipboardTextarea.value);
      alert('已复制到剪贴板！');
    } catch {
      alert('复制失败，请手动复制。');
    }
  });
  $('shareBtn').addEventListener('click', () => shareModal.style.display = 'flex');
  $('listShareBtn').addEventListener('click', async () => {
    shareListModal.style.display = 'flex';
    const container = $('shareLinksContainer');
    const pagination = $('paginationControls');
    const prevBtn = $('prevPage');
    const nextBtn = $('nextPage');
    const indicator = $('pageIndicator');
    container.innerHTML = '加载中...';
    pagination.style.display = 'none';
    try {
      const res = await fetch('/shares');
      const links = await res.json();
	  links.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      if (!links.length) {
        container.innerHTML = '暂无分享链接';
        return;
      }
      let currentPage = 1;
      const pageSize = 10;
      const totalPages = Math.ceil(links.length / pageSize);
      const renderPage = () => {
        const start = (currentPage - 1) * pageSize;
        const pageItems = links.slice(start, start + pageSize);
        container.innerHTML = pageItems.map(l => \`
          <div>
            <a href="\${l.url}" target="_blank">\${(l.text || '').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</a>
            <div class="meta">查看：\${l.views}/\${l.maxViews}｜创建：\${new Date(l.createdAt).toLocaleString()}</div>
          </div>
        \`).join('<hr>');
        indicator.textContent = \`\${currentPage} / \${totalPages}\`;
        pagination.style.display = totalPages > 1 ? 'flex' : 'none';
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
      };
      prevBtn.onclick = () => {
        if (currentPage > 1) {
          currentPage--;
          renderPage();
        }
      };
      nextBtn.onclick = () => {
        if (currentPage < totalPages) {
          currentPage++;
          renderPage();
        }
      };
      renderPage();
    } catch (e) {
      container.innerHTML = '加载失败';
    }
  });
  document.querySelector('.close').addEventListener('click', () => shareModal.style.display = 'none');
  document.querySelector('.close-list').addEventListener('click', () => shareListModal.style.display = 'none');
  $('generateShareLink').addEventListener('click', async () => {
    const body = {
      maxViews: parseInt($('maxViews').value) || null,
      validMinutes: parseInt($('validMinutes').value) || null
    };
    const res = await fetch('/share', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const { shareUrl } = await res.json();
    $('shareLink').innerHTML = \`<a href="\${shareUrl}" target="_blank">\${shareUrl}</a>\`;
  });
  const checkDark = () => {
    document.body.classList.toggle('dark-mode',
      window.matchMedia('(prefers-color-scheme: dark)').matches);
  };
  checkDark();
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkDark);
  window.addEventListener('click', e => {
    if (e.target === shareModal) shareModal.style.display = 'none';
    if (e.target === shareListModal) shareListModal.style.display = 'none';
  });
<\/script>
</body>
</html>
`;