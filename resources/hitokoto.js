const hitokotoTextElement = document.getElementById("hitokoto_text");
const hitokotoAuthorElement = document.getElementById("hitokoto_author");

let api_path = "https://v1.hitokoto.cn/?encode=json&charset=utf-8";

async function fetchAndDisplayHitokoto() {
  // 检查HTML元素是否存在，避免后续操作出错
  if (!hitokotoTextElement || !hitokotoAuthorElement) {
    console.error("一言:元素ID 'hitokoto_text','hitokoto_author'不存在");
    return; // 终止函数执行
  }

  try {
    const response = await fetch(api_path);

    // 检查网络请求是否成功
    if (!response.ok) {
      throw new Error(`网络请求失败,状态码: ${response.status}`);
    }
    const data = await response.json();

    // 更新页面内容
    hitokotoTextElement.textContent = data.hitokoto || ""; // 提供一个默认值

    let authorInfo = "未知来源";
    if (data.from_who && data.from) {
      authorInfo = `—— ${data.from_who}「${data.from}」`;
    } else if (data.from) {
      authorInfo = `——「${data.from}」`;
    }
    hitokotoAuthorElement.textContent = authorInfo;

  } catch (error) {
    // 捕获并处理在fetch或后续操作中发生的错误
    console.error("一言:", error);
    hitokotoTextElement.textContent = "一言加载失败";
    hitokotoAuthorElement.textContent = ""; // 清空作者信息
  } finally {
    // 超时
    setTimeout(fetchAndDisplayHitokoto, 10000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchAndDisplayHitokoto();
});