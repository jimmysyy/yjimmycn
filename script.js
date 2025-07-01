document.addEventListener('DOMContentLoaded', () => {
    // 页面加载完成后，可以执行一些动画或交互逻辑

    // 例如，如果你想在某个时刻添加/移除某个class来触发CSS动画
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        // main-content 的 fadeInSlideUp 动画已经在 CSS 中定义并自动触发
        // 如果你希望通过JS控制，可以这样做：
        mainContent.classList.add('is-loaded'); // 假设你有一个 .is-loaded 类来触发动画
    }

    // 示例：一个简单的鼠标视差效果 (可选，较为复杂)
    const body = document.body;
    body.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
        const y = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1

        // 调整背景图片的 position 来创建视差效果
        body.style.backgroundPositionX = `${50 + x * 2}%`;
        body.style.backgroundPositionY = `${50 + y * 2}%`;
    });

    // 示例：如果未来有“查看更多”按钮，可以平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    console.log('个人主页已加载并准备就绪！');
});