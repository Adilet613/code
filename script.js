// script.js — логика сайта

// Вывод тем
function loadTopics() {
  const container = document.getElementById("topic-list");
  container.innerHTML = "";
  topics.forEach(topic => {
    const div = document.createElement("div");
    div.className = "topic-block";
    div.innerHTML = `
      <h3>${topic.title}</h3>
      <p><strong>📘 Теория:</strong> ${topic.theory}</p>
      <pre><code>${topic.example}</code></pre>
      <h4>✅ Задачи:</h4>
      <ul>
        ${topic.tasks.map(task => `<li><strong>${task.title}:</strong> ${task.description}</li>`).join('')}
      </ul>
      <h4>🧠 Мини-тест:</h4>
      <p>${topic.miniTest.question}</p>
      <ul>
        ${topic.miniTest.options.map(opt => `<li>${opt}</li>`).join('')}
      </ul>
    `;
    container.appendChild(div);
  });
}

// Выбор уровня
function selectLevel(levelId) {
  const level = levels[levelId];
  alert(`Вы выбрали уровень: ${level.title}\n${level.description}`);
  loadTopics();
}

// Загрузка при открытии
window.onload = () => {
  // Можно показать приветствие или что-то ещё
};
