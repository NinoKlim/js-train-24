console.log("Завдання: 7 ==============================");

// Створюємо функцію task7, яка використовує setInterval та проміси.
function task7() {
  // Створюємо новий проміс.
  const promise = new Promise((resolve, reject) => {
    // Використовуємо функцію setInterval, щоб виконати функцію кожну секунду.
    // Отримаємо поточну дату та час
    // Отримуємо секунди з поточної дати
    const second = setInterval(() => {
      let date = new Date();
      let seconds = date.getSeconds();
      console.log(`Поточні секунди: ${seconds}`);
      // Виводимо в консоль повідомлення `Поточні секунди: ${seconds}`
      // Якщо поточні секунди кратні 10, очищуємо інтервал та резолвимо проміс з рядком "Поточні секунди кратні 10!".
      // Якщо поточні секунди кратні 3, очищуємо інтервал та відхиляємо проміс з рядком "Поточні секунди кратні 3!".
      if (seconds % 10 === 0) {
        clearInterval(second);
        resolve("Поточні секунди кратні 10!");
      } else if (seconds % 3 === 0 && seconds % 10 !== 0) {
        clearInterval(second);
        reject("Поточні секунди кратні 3!");
      }
    }, 1000);
  });
  // Використовуємо then для обробки зарезолвленого проміса, та виводимо в консоль `Проміс зарезолвився з значенням: ${value}` .
  promise
    .then((result) => {
      console.log(`Проміс зарезолвився з значенням: ${result}`);
    })
    .catch((error) => {
      console.error(`Проміс відхилився з помилкою: ${error}`);
    })
    .finally(() => {
      console.log("Проміс завершено");
    });
  // Якщо проміс відхилено, обробляємо помилку за допомогою catch, та виводимо в консоль `Проміс відхилився з помилкою: ${error}`.
  // Використовуємо finally для виконання дій після завершення проміса, незалежно від його статусу, та виводимо в консоль "Проміс завершено".
}

// Викликаємо функцію task7
task7();
