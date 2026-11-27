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

/*Task-11*/
// Напишіть функцію, яка повертає новий масив без вказаних значень.Використовуйте примітиви
// Очікується [1, 2, 3, 1, 2] без [1, 2] => [3]

// function arrayWithoutValues(array, values) {
//   const result = [];
//   for (const element of array) {
//     if (!values.includes(element)) {
//       result.push(element);
//     }
//   }
//   return result;
// }

/*Task-12*/
// Напишіть функцію, яка розверає масив у зворотньому напрямку.Метод reverse() не використовувати
// const arrNumber = [11, 9, 2, 1];

// function reverseArray(array) {
//   const result = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     result.push(array[i]);
//   }
//   return result;
// }

/*Task-13*/
// Напишіть функцію, яка очистить масив від небажаних значень, таких як false, undefined, порожні рядки, нуль, null

// function clearArray(array) {
//   const result = [];
//   for (const element of array) {
//     if (element && element !== undefined && element !== null) {
//       result.push(element);
//     }
//   }
//   return result;
// }

/*Task-14*/
// Напишіть функцію, яка перетворює глибокий масив в одномірний. Не використовувати array.flat()
// Очікується[1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]

// function flatArray(array) {
//   let result = [];
//   let temp = Array.from(array);
//   let hasArray = 1;

//   while (hasArray) {
//     for (let i = 0; i < temp.length; i++) {
//       if (!Array.isArray(temp[i])) {
//         result.push(temp[i]);
//         if (i === temp.length - 1) {
//           hasArray = 0;
//         }
//       } else {
//         result = result.concat(temp[i]);
//       }
//     }
//     temp = result;
//     result = [];
//   }

//   return temp;
// }

// function flatArray(array) {
//   const temp = array.join().split(',');
//   const result = [];
//   for (const element of temp) {
//     result.push(Number(element));
//   }
//   return result;
// }

/*Task-15*/
// Напишіть функцію, що прибирає значення, які повторюються
// Очікується["a",1, 2, "b",3, 1, 2,"a"] => ["a", 1, 2 ,"b" , 3]

// function removeDuplicates(array) {
//   const result = [];
//   for (const element of array) {
//     if (!result.includes(element)) {
//       result.push(element);
//     }
//   }
//   return result;
// }

/*Task-16*/
// Напишіть функцію findCommonElements(arr1, arr2),
// яка знаходить елементи, що є одночасно
// в обох масивах.
//
// Використовуйте вкладені цикли.
//
// Приклад:
// findCommonElements([1, 2, 3, 4], [3, 4, 5, 6])
//
// Результат: [3, 4]

// function findCommonElements(arr1, arr2) {
//   const result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         result.push(arr1[i]);
//       }
//     }
//   }
//   return result;
// }

/*Task-17*/
// Напишіть функцію getAllMatches(array),
// яка формує список усіх можливих футбольних матчів
// між командами.
//
// Використовуйте вкладені цикли.
//
// Приклад:
// getAllMatches(["Барселона", "Реал", "Ліверпуль", "Баварія"])
//
// Результат:
// [
//   "Барселона - Реал",
//   "Барселона - Ліверпуль",
//   "Барселона - Баварія",
//   "Реал - Ліверпуль",
//   "Реал - Баварія",
//   "Ліверпуль - Баварія"
// ]
//
// Кожна команда повинна зіграти з іншою лише один раз.
// Команда не може грати сама із собою.
// Матчі у зворотному порядку вважаються однаковими.

// function getAllMatches(array) {
//   const result = [];
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       result.push(`${array[i]} - ${array[j]}`);
//     }
//   }
//   return result;
// }

/*Task-18*/
// Напишіть функцію findPairs(array, target),
// яка знаходить усі пари чисел,
// сума яких дорівнює target.
//
// Використовуйте вкладені цикли.
//
// Приклад:
// findPairs([1, 2, 3, 4, 5, 6], 7)
//
// Результат:
// [[1, 6], [2, 5], [3, 4]]

// function findPairs(array, target) {
//   const result = [];
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === target) {
//         result.push([array[i], array[j]]);
//       }
//     }
//   }
//   return result;
// }

/*Task-19*/
// Напишіть функцію printMatrix(matrix),
// яка виводить усі елементи двовимірного масиву
// у консоль.
//
// Використовуйте вкладені цикли.
//
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
//
// Результат:
// 1 2 3
// 4 5 6
// 7 8 9

// function printMatrix(matrix) {
//   let result = '';
//   for (const row of matrix) {
//     result += row.join(' ') + '\n';
//   }
//   console.log(result);
// }

/*Task-21*/
// Створіть функцію createProfile(), яка приймає
// ім'я, вік та місто користувача.
//
// Якщо місто не передане, використовуйте "Unknown city".
// Якщо вік не переданий, використовуйте 18.
//
// Функція повинна повертати рядок із даними користувача.
//
// Приклади:
// createProfile("Anna", 25, "London")
// createProfile("Peter")
//
// Для першого виклику:
// "Name: Anna, Age: 25, City: London"
//
// Для другого виклику:
// "Name: Peter, Age: 18, City: Unknown city"

// function createProfile(name, age = '18', city = 'Unknown city') {
//   return `Name: ${name}, Age: ${age}, City: ${city}`;
// }

/*Task-23*/
// Є масив місць у кінотеатрі:
//
// const seats = [
//   ['free', 'free', 'busy'],
//   ['busy', 'free', 'free'],
//   ['free', 'busy', 'free'],
// ];
//
// Створіть функцію findFreeSeats(), яка знаходить
// усі вільні місця в кінотеатрі.
//
// Функція повинна повертати масив рядків,
// у яких вказані номер ряду та номер місця.
//
// Нумерація рядів та місць повинна починатися з 1.
//
// Використовуйте вкладені цикли.
//
// Результат:
// [
//   "Row 1, Seat 1",
//   "Row 1, Seat 2",
//   "Row 2, Seat 2",
//   "Row 2, Seat 3",
//   "Row 3, Seat 1",
//   "Row 3, Seat 3"
// ]

// function findFreeSeats() {
//   const result = [];

//   for (let i = 0; i < seats.length; i++) {
//     for (let j = 0; j < seats[i].length; j++) {
//       if (seats[i][j] === 'free') {
//         result.push(`Row ${i + 1}, Seat ${j + 1}`);
//       }
//     }
//   }

//   return result;
// }
