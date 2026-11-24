/*Task-1*/

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * 59);

// if (min <= 15) {
//   alert(`${min} входить в першу чверть`);
// } else if (min <= 30) {
//   alert(`${min} входить в другу чверть`);
// } else if (min <= 45) {
//   alert(`${min} входить в третю чверть`);
// } else {
//   alert(`${min} входить в четверту чверть`);
// }

/*Task-2*/
// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const num = prompt('Введіть ціле число від 1 до 4:');

// switch (num) {
//   case '1':
//     result = 'зима';
//     break;
//   case '2':
//     result = 'весна';
//     break;
//   case '3':
//     result = 'літо';
//     break;
//   case '4':
//     result = 'осінь';
//     break;
//   default:
//     result = 'Вибачте, але ви маєте ввести значення від 1 до 4 включно';
// }

// console.log(result);

/*Task-3*/
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const minutes = Number(prompt('Введіть кількість хвилин:'));
// console.log(
//   `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`
// );

/*Task-4*/
// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// const login = prompt('Введіть логін:');

// console.log(login);

// switch (login) {
//   case 'Адмін':
//     alert(prompt('Пароль:') === 'Я головний' ? 'Добрий день!' : 'Невірний пароль!');
//     break;
//   case '':
//   case null:
//     alert('Скасовано');
//     break;
//   default:
//     alert('Я вас не знаю');
// }

/*Task-5*/
// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

// let counter = 0;

// while (counter <= 20) {
//   console.log(counter);
//   counter += 1;
// }

/*Task-6*/
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//   let sum = 0;
//   for (let i = max; i >= min; i--) {
//     console.log(i);
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

/*Task-7*/
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//   return typeof a === 'number' && typeof b === 'number'
//     ? a > b
//       ? a
//       : b
//     : 'Not a number!';
// }

/*Task-8*/
// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// function isAdult(age) {
//   return age >= 18 ? true : confirm('Вам є 18?');
// }

/*Task-9*/
// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) {
//   for (let i = 1; i < num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzbuzz');
//     } else if (i % 3 === 0) {
//       console.log('fizz');
//     } else if (i % 5 === 0) {
//       console.log('buzz');
//     }
//   }
// }

/*Task-10*/
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити
// ввести ще раз.
// Цикл повинен питати число, доки користувач не
// введе число більше 100, чи не натисне кнопку
// Cancel в prompt

// let number;

// do {
//   number = prompt('Введіть число більше 100:');
// } while (number <= 100 && number !== null);

/*Task-11*/
// Напишіть функцію, яка приймає адресу сайта url та перевіряє чи закінчується значення
// параметра символом /. Якщо ні, додайте до кінця
// значення url цей символ і поверніть оновлене значення з функції, але тільки в тому випадку,
// якщо в url є підрядок "my-site".
// В іншому випадку поверніть з функції адресу в незмінному вигляді

// const url = "https://my-site.com/about";

// function urlCheck(url) {
//   return !url.endsWith('/') && url.includes('my-site') ? url + '/' : url;
// }

// console.log(urlCheck('https://my-site.com/article'));
// console.log(urlCheck('https://mysite.com/article'));
// console.log(urlCheck('https://my-site.com/article/'));

/*Task-12*/
// //Дано рядок, який складається із символів.Напишіть функію
// яка перевіряє, що першим символом цього рядка є літера 'a'.
//  Якщо це так - вивести "так", у іншому випадку вивести "ні"

// const string = 'abcde'; // тестовий рядок 1
// const stringSecond = 'bcde'; // тестовий рядок 2

// function checkString(string) {
//   console.log(string[0] === 'a' ? 'так' : 'ні');
// }

// checkString(string);
// checkString(stringSecond);

// Написати функцію extractBetween, яка приймає три аргументи
// рядок str, підрядок start і підрядок end. Функція повинна повертати частину рядка
// між першим входженням підрядка start і підрядка end. Якщо один з підрядків не знайдено,
// функція повинна повертати порожній рядок.

// function extractBetween(str, start, end) {
//   const startIndex = str.indexOf(start);
//   const endIndex = str.indexOf(end);
//   return startIndex !== -1 && endIndex !== -1
//     ? str.slice(startIndex + start.length, endIndex)
//     : '';
// }

// // Приклади використання:
// console.log(extractBetween('Hello, [world]!', '[', ']')); // "world"
// console.log(extractBetween('Hello, [world]!', '{', '}')); // ""
// console.log(extractBetween('Hello, {world}!', '{', '}')); // "world"

/*Task-13*/
// Створіть функцію sumNumbers(min, max),
// яка приймає два числа.
// За допомогою циклу підрахуйте суму всіх чисел
// від min до max включно.
// Поверніть результат з функції.

// function sumNumbers(min, max) {
//   let sum = 0;
//   for (let i = min; i <= max; i++) {
//     sum += i;
//   }
//   return sum;
// }

/*Task-14*/
// Створіть функцію sumEvenNumbers(min, max),
// яка приймає два числа.
// За допомогою циклу підрахуйте суму всіх парних
// чисел у заданому діапазоні.
// Поверніть результат з функції.

// function sumEvenNumbers(min, max) {
//   let sum = 0;
//   for (let i = min; i <= max; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

/*Task-15*/
// Напишіть цикл while, який запитує у користувача
// числа через prompt.
// Потрібно підрахувати суму всіх введених чисел.
// Якщо користувач натискає Cancel або залишає поле
// порожнім — зупинити цикл.
// Після завершення циклу вивести суму в консоль.

// let sum = 0;
// let number;

// do {
//   number = prompt('Введіть число:');
//   sum += Number.isNaN(number) ? Number(number) : 0;
// } while (number && number !== '');

// console.log(sum);

/*Task-16*/
// Створіть функцію printRectangle(width, height),
// яка приймає ширину та висоту прямокутника.
// За допомогою вкладених циклів виведіть у консоль
// прямокутник із символів *.
// Наприклад, printRectangle(5, 3) виведе:
//
// *****
// *****
// *****

// function printRectangle(width, height) {
//   let result = '';
//   for (let i = 0; i < height; i++) {
//     for (let i = 0; i < width; i++) {
//       result += '*';
//     }
//     result += '\n';
//   }
//   console.log(result);
// }

/*Task-17*/
// Гра «Вгадай число»
//
// Комп'ютер загадує випадкове число від 1 до 100.
// Користувач повинен вгадати його через prompt.
//
// Якщо введене число більше за загадане —
// вивести alert('Занадто багато!').
//
// Якщо менше — alert('Занадто мало!').
//
// Якщо користувач вгадав — alert('Вітаю! Ви перемогли!').
//
// Додатково:
// - Підраховуйте кількість спроб.
// - Після перемоги виведіть кількість спроб у консоль.
// - Якщо користувач натиснув Cancel — гра завершується.
//
// Використайте while.

// const randomNumber = Math.floor(Math.random() * 99 + 1);
// let userInput;
// let attempt = 0;

// do {
//   userInput = prompt('Вгадайте число від 1 до 100:');
//   attempt += 1;
//   if (userInput === randomNumber) {
//     alert('Вітаю! Ви перемогли!');
//     console.log(attempt);
//   } else if (userInput > randomNumber) {
//     alert('Занадто багато!');
//   } else if (userInput < randomNumber && userInput) {
//     alert(`Занадто мало!`);
//   }
// } while (userInput);

/*Task-18*/
// 🔐 Генератор пароля
//
// Створіть функцію generatePassword(length),
// яка генерує випадковий пароль заданої довжини.
//
// Використайте такі символи:
// - великі літери;
// - маленькі літери;
// - цифри.
// let characters =
//   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//
// Наприклад:
// generatePassword(8) -> 'aB7kP2mQ'
//
// Кожен символ повинен вибиратися випадково.
// Поверніть готовий пароль.

// function generatePassword(length) {
//   let password = '';
//   for (let i = 0; i < length; i++) {
//     password += characters[Math.floor(Math.random() * characters.length)];
//   }
//   return password;
// }
