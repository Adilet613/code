// data.js — темы, задачи, уровни

const levels = {
  beginner: {
    title: "Новичок",
    description: "Начни с основ: переменные, ввод/вывод, условия."
  },
  intermediate: {
    title: "Средний",
    description: "Углубляемся: массивы, функции, циклы."
  },
  advanced: {
    title: "Продвинутый",
    description: "Сложные темы: графы, рекурсия, динамика."
  }
};

const topics = [
  {
    id: "variables",
    title: "Переменные и ввод/вывод",
    theory: "В C++ переменные используются для хранения данных. Например: int x = 5;",
    example: `#include <iostream>\nusing namespace std;\nint main() {\n  int x;\n  cin >> x;\n  cout << x * 2;\n  return 0;\n}`,
    tasks: [
      {
        id: "task1",
        title: "Удвоение числа",
        description: "Прочитай число и выведи его удвоенное значение.",
        input: "5",
        expectedOutput: "10"
      },
      {
        id: "task2",
        title: "Сумма двух чисел",
        description: "Прочитай два числа и выведи их сумму.",
        input: "3 7",
        expectedOutput: "10"
      }
    ],
    miniTest: {
      question: "Какой тип переменной хранит целые числа в C++?",
      options: ["float", "int", "string", "bool"],
      answer: "int"
    }
  },
  {
    id: "conditions",
    title: "Условия (if/else)",
    theory: "Условия позволяют выполнять разные действия в зависимости от условий.",
    example: `int x; cin >> x;\nif (x > 0) cout << "Positive";\nelse cout << "Non-positive";`,
    tasks: [
      {
        id: "task3",
        title: "Чётное или нечётное",
        description: "Выведи 'Even', если число чётное, иначе — 'Odd'.",
        input: "4",
        expectedOutput: "Even"
      }
    ],
    miniTest: {
      question: "Что делает оператор '==' в C++?",
      options: ["Присваивает значение", "Сравнивает значения", "Проверяет тип", "Инвертирует значение"],
      answer: "Сравнивает значения"
    }
  }
];
