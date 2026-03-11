// 按钮数据配置区
// title: 按钮文字
// icon: FontAwesome 图标的 Class 名称（可以在 fontawesome.com 搜索替换）
// url: 点击跳转的链接
const linksData = [
    { title: "我的微博", icon: "fa-brands fa-weibo", url: "https://weibo.com/u/5958139071" },
    { title: "资源收藏合集", icon: "fa-solid fa-book", url: "https://s.yjimmy.cn" },
    { title: "每日更新资源", icon: "fa-solid fa-film", url: "https://bcnpzlg6nhng.feishu.cn/docx/VfU1d1kzBotTCDxP0jccsqtDncb?from=from_copylink" },
    // { title: "软件", icon: "fa-solid fa-download", url: "#" },
    { title: "我的邮箱", icon: "fa-solid fa-envelope", url: "mailto:2936653629@qq.com" },
    { title: "QQ群", icon: "fa-brands fa-qq", url: "https://qm.qq.com/q/8SNlVrgKju" },
    // 你可以无限往下复制添加，布局会自动适应
    { title: "帮找资源", icon: "fa-solid fa-magnifying-glass", url: "https://qm.qq.com/q/PioMpN9YAM" }
];

// 初始化渲染函数
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("links-container");

    linksData.forEach(link => {
        // 创建 a 标签
        const a = document.createElement("a");
        a.href = link.url;
        a.className = "apple-btn";
        a.target = "_blank"; // 在新标签页打开链接
        a.rel = "noopener noreferrer"; // 安全属性

        // 创建 图标 标签
        const i = document.createElement("i");
        i.className = link.icon;

        // 创建 文本 标签
        const span = document.createElement("span");
        span.innerText = link.title;

        // 组装并放入容器
        a.appendChild(i);
        a.appendChild(span);
        container.appendChild(a);
    });
});