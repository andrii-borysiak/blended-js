/*Task-1*/
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// styles[styles.indexOf('blues')] = 'classic';

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }

// logItems(styles);

/*Task-2*/
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ['Peter', 'John', 'Igor', 'Sasha'];

// function checkLogin(array) {
//   const input = prompt("Введіть ім'я користувача");
//   if (array.includes(input)) {
//     alert(`Welcome, ${input}!`);
//   } else {
//     alert('User not found');
//   }
// }

// checkLogin(logins);

/*Task-3*/
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage() {
//   let sum = 0;
//   let counter = 0;

//   for (const argument of arguments) {
//     if (typeof argument !== 'number') {
//       return;
//     }
//     sum += argument;
//     counter++;
//   }

//   return counter !== 0 ? sum / counter : 0;
// }

/*Task-4*/
// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// function sumAdjacentNumber(array) {
//   const result = [];
//   for (let i = 0; i < array.length - 1; i++) {
//     result.push(array[i] + array[i + 1]);
//   }
//   return result;
// }

/*Task-5*/
// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(numbers) {
//   if (!Array.isArray(numbers)) {
//     return 'Sorry, it is not an array!';
//   }

//   let min = numbers[0];

//   for (const number of numbers) {
//     if (number < min) {
//       min = number;
//     }
//   }

//   return min;
// }

/*Task-6*/
// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord('London is the capital of Great Britain')); // 'capital'

// function findLongestWord(string) {
//   const array = string.split(' ');
//   let longestWord = array[0];
//   let longestWordLength = array[0].length;
//   for (const word of array) {
//     if (word.length > longestWordLength) {
//       longestWord = word;
//       longestWordLength = word.length;
//     }
//   }
//   return longestWord;
// }

/*Task-7*/
// Напишіть функцію countNumbers(numbers),
// яка підраховує кількість додатних, від'ємних
// та нульових чисел у масиві.
//
// Поверніть рядок із трьома значеннями:
// positive, negative, zero.
//
// Приклад:
// countNumbers([2, -5, 0, 10, -3, 0]);
// 'positive: 2, negative: 2, zero: 2'

// function countNumbers(numbers) {
//   const result = [0, 0, 0];
//   for (const number of numbers) {
//     if (number > 0) {
//       result[0]++;
//     } else if (number < 0) {
//       result[1]++;
//     } else {
//       result[2]++;
//     }
//   }
//   return `positive: ${result[0]}, negative: ${result[1]}, zero: ${result[2]}`;
// }

/*Task-8*/
// Напишіть функцію findMostFrequentElement(array),
// яка знаходить елемент, що зустрічається
// у масиві найчастіше.
//
// Якщо декілька елементів зустрічаються однакову
// максимальну кількість разів — поверніть перший
// із них у порядку появи.
//
// Приклад:
// findMostFrequentElement([1, 2, 2, 3, 3, 3, 4]);
// 3

// function findMostFrequentElement(array) {
//   const frequencies = [];
//   const elements = [];

//   for (const element of array) {
//     if (!elements.includes(element)) {
//       elements.push(element);
//       frequencies.push(1);
//     } else {
//       frequencies[elements.indexOf(element)]++;
//     }
//   }

//   let maxFrequency = frequencies[0];
//   let mostFrequentElement = elements[0];

//   for (let i = 1; i < elements.length; i++) {
//     if (frequencies[i] > maxFrequency) {
//       mostFrequentElement = elements[i];
//       maxFrequency = frequencies[i];
//     }
//   }

//   return mostFrequentElement;
// }

/*Task-9*/
// Напишіть функцію getEvenNumbers(numbers),
// яка створює та повертає новий масив,
// що містить тільки парні числа з початкового масиву.
//
// Не використовуйте filter().
//
// Приклад:
// getEvenNumbers([1, 2, 3, 4, 5, 6])
// [2, 4, 6]

// function getEvenNumbers(numbers) {
//   const result = [];
//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       result.push(number);
//     }
//   }
//   return result;
// }

/*Task-10*/
// Напишіть функцію getUniqueElements(array),
// яка створює новий масив без повторюваних елементів.
//
// Не використовуйте includes() та indexOf().
//
// Приклад:
// getUniqueElements([1, 2, 2, 3, 1, 4, 3])
// [1, 2, 3, 4]

// function getUniqueElements(array) {
//   const result = [];

//   for (const element of array) {
//     if (!result.includes(element)) {
//       result.push(element);
//     }
//   }

//   return result;
// }
