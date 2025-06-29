console.log(
  '\n' +
  ` %c ${new Date().getFullYear()} © Victor All Rights Reserved. ` +
  '\n',
  'color: #fadfa3; background: #030307; padding:5px 0;'
);

// 变化标题
const OriginTitle = document.title;
let titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = "不要走嘛~";
        clearTimeout(titleTime);
    } else {
        document.title = "欢迎回来<_<";
        titleTime = setTimeout(function() {
            document.title = OriginTitle;
        }, 2000);
    }
});

// 按钮事件
document.addEventListener('DOMContentLoaded', () => {
  const footerElement = document.getElementById('footer');
  if (footerElement) {
    const currentYear = new Date().getFullYear().toString();
    if (!footerElement.textContent.startsWith(currentYear)) {
      footerElement.prepend(currentYear + ' ');
    }
  }

  const homeButton = document.getElementById('homeButton');
  if (homeButton) {
    homeButton.addEventListener('click', () => {
      window.location.href = "https://chron.top";
    });
  }

  const chatButton = document.getElementById('chatButton');
  if (chatButton) {
    chatButton.addEventListener('click', () => {
      window.location.href = "";
    });
  }
});