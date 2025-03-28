// Функция для создания HTML-разметки одного поста
function createPostHTML(post) {
  return `
      <div class="post">
          <h2>${post.title}</h2>
          <p>${post.body}</p>
      </div>
  `;
}

// Функция для добавления одного поста в контейнер
function addPostToContainer(container, postHTML) {
  container.insertAdjacentHTML("beforeend", postHTML);
}

// Функция, которая делает GET-запрос и загружает посты
async function fetchAndDisplayPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    const container = document.getElementById("posts");

    // Перебираем массив постов и добавляем каждый в контейнер

    posts.forEach((post) => {
      const postHTML = createPostHTML(post);
      addPostToContainer(container, postHTML);
    });
  } catch (error) {
    console.error("Ошибка при загрузке постов:", error);
  }
}
// Запускаем загрузку постов
fetchAndDisplayPosts();
