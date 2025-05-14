// accordion.js

const headers = ["H1", "H2", "H3", "H4", "H5", "H6"];
const apiUrl = "https://api.6889692.workers.dev/api/check-password";
const passwordTimeout = 5 * 60 * 1000; // 5分钟有效

function isPasswordValid() {
  const timestamp = localStorage.getItem("pw_verified_at");
  return timestamp && (Date.now() - Number(timestamp) < passwordTimeout);
}

function setPasswordValid() {
  localStorage.setItem("pw_verified_at", Date.now());
}

function toggleMenu(target) {
  const subItem = target.nextElementSibling;
  let depth = 0, parent = subItem.parentElement;
  while (parent && parent !== document.querySelector(".accordion")) {
    depth++; parent = parent.parentElement;
  }

  document.querySelectorAll(".accordion p, .accordion div").forEach(el => {
    let elDepth = 0, elParent = el.parentElement;
    while (elParent && elParent !== document.querySelector(".accordion")) {
      elDepth++; elParent = elParent.parentElement;
    }
    if (elDepth >= depth && el !== subItem) el.style.display = "none";
  });

  subItem.style.display = (subItem.style.display === "block") ? "none" : "block";
  target.style.borderBottomRightRadius = target.style.borderBottomLeftRadius = "0";
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".accordion").addEventListener("click", async function(e) {
    const target = e.target;
    const name = target.nodeName.toUpperCase();

    if (!headers.includes(name)) return;

    const requiresPassword = target.getAttribute("data-password") === "true";

    if (requiresPassword && !isPasswordValid()) {
      const password = prompt("请输入密码：");
      if (password === null) return;

      try {
        const res = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password })
        });
        const data = await res.json();

        if (data.success) {
          setPasswordValid();
          toggleMenu(target);
        } else {
          alert("密码错误！");
          window.close();
        }
      } catch (err) {
        alert("请求失败，请稍后重试！");
      }
    } else {
      toggleMenu(target);
    }
  });
});
