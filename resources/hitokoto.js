const hitokotoTextElement = document.getElementById("hitokoto_text");
const hitokotoAuthorElement = document.getElementById("hitokoto_author");

let api_path = "http://127.0.0.1:36901/hitokoto";

async function fetchAndDisplayHitokoto() {
  if (!hitokotoTextElement || !hitokotoAuthorElement) {
    console.error("一言:元素ID 'hitokoto_text','hitokoto_author'不存在");
    return;
  }

  try {
    const response = await fetch(api_path);
    if (!response.ok) {
      throw new Error(`网络请求失败,状态码: ${response.status}`);
    }
    const data = await response.json();

    let authorInfo = "无名氏";
    if (data.data.from_who && data.data.from) {
      authorInfo = `—— ${data.data.from_who}「${data.data.from}」`;
    } else if (data.data.from) {
      authorInfo = `——「${data.data.from}」`;
    }
    hitokotoAuthorElement.textContent = authorInfo;
    hitokotoTextElement.textContent = data.data.hitokoto || "";
  } catch (error) {
    console.error("一言:", error);
    hitokotoTextElement.textContent = "O.o 出错了~";
  } finally {
    setTimeout(fetchAndDisplayHitokoto, 10000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchAndDisplayHitokoto();
});