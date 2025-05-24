// Copyright console log from original main.js
console.log(
  '\n' +
  ` %c ${new Date().getFullYear()} © Victor All Rights Reserved. ` +
  '\n',
  'color: #fadfa3; background: #030307; padding:5px 0;'
);

document.addEventListener('DOMContentLoaded', () => {
  const footerElement = document.getElementById('footer');
  if (footerElement) {
    const currentYear = new Date().getFullYear().toString();
    if (!footerElement.textContent.startsWith(currentYear)) {
      footerElement.prepend(currentYear + ' ');
    }
  }


  const blogButton = document.getElementById('blogButton');
  if (blogButton) {
    blogButton.addEventListener('click', () => {
      alert("博客开发中...");
    });
  }

  const qqButton = document.getElementById('qqButton');
  if (qqButton) {
    qqButton.addEventListener('click', () => {
      const qqNumber = "3101369496"; // QQ number
      window.location.href = `tencent://message/?uin=${qqNumber}&Site=&Menu=yes`;
    });
  }
});