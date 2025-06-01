// runner.js — запуск и проверка кода пользователя

const editor = document.getElementById("code-editor");
const runButton = document.getElementById("run-code");
const outputDiv = document.getElementById("output");

// Псевдо-компилятор (реально C++ не запускается в браузере, нужен API)
function runCode() {
  const code = editor.value;

  // Пример простой подстановки "виртуального" вывода
  if (code.includes("cout << \"Hello\"")) {
    outputDiv.textContent = "Hello";
  } else if (code.includes("cout")) {
    outputDiv.textContent = "Код содержит cout, но пример неизвестен.";
  } else {
    outputDiv.textContent = "Не удалось выполнить код. Только ограниченные примеры работают.";
  }
}

runButton.addEventListener("click", runCode);
