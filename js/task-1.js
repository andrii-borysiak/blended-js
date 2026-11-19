// const result = alert("asdfsd");
// console.log(result);

// const result = prompt("login");
// console.log(result);

// const result = confirm("18"); true або false
// console.log(result);

// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// const number = Number(prompt("Введіть число:"));

// if (number === 10) {
//   alert("Вірно");
// } else {
//   alert("Невірно");
// }

// //   умова    ? код, якщо true : код, якщо false
// number === 10 ? alert("Вірно") : alert("Невірно");

// Написати функцію getUserInfo, яка приймає ім'я та вік користувача і повертає інформацію про нього у вигляді рядка.
// console.log(getUserInfo("Anna", 25));
// // 'Anna is 25 years old.'

// console.log(getUserInfo("John", 30));
// // 'John is 30 years old.'

// // оголошення функції з інструкцією, яку треба виконати
// function getUserInfo(name, age) {
//   // інструкція
//   return `${name} is ${age} years old.`;
// }

// // на цьому рядку створився рядок
// // присвоєння виклику функції змінній
// const result = getUserInfo("Anna", 25);
// // лог в консоль
// console.log(result);

// виклик функції в лозі
// console.log(getUserInfo("John", 30));
// console.log(getUserInfo("Anna", 25));

// Написати функцію convertMinutesToSeconds, яка приймає кількість хвилин і повертає кількість секунд.
// console.log(convertMinutesToSeconds(1)); // 60
// console.log(convertMinutesToSeconds(5)); // 300
// console.log(convertMinutesToSeconds(10)); // 600

// function convertMinutesToSeconds(minutes) {
//   return minutes * 60;
// }

// Написати функцію getProductCount, яка приймає рядок із кількістю товарів та повертає ціле число.
// console.log(getProductCount("15 items")); // 15
// console.log(getProductCount("8 products")); // 8
// console.log(getProductCount("100 pieces")); // 100

// function getProductCount(quantity) {
//   return Number.parseInt(quantity);
// }

// Написати функцію convertToInteger, яка приймає рядок і повертає ціле число за допомогою parseInt().
// console.log(convertToInteger("25")); // 25
// console.log(convertToInteger("100.75")); // 100
// console.log(convertToInteger("42px")); // 42

// function convertToInteger(string) {
//   return Number.parseInt(string);
// }

// Написати функцію sumStrings, яка приймає два рядки з цілими числами, перетворює їх на числа та повертає суму.
// console.log(sumStrings("10", "20")); // 30
// console.log(sumStrings("15", "5")); // 20
// console.log(sumStrings("100", "200")); // 300

// function sumStrings(string1, string2) {
//   return Number(string1) + Number(string2);
// }

// Написати функцію greet, яка приймає ім'я та повертає привітання. Якщо ім'я не передано, використовувати значення Guest.
// console.log(greet("Anna")); // 'Hello, Anna!'
// console.log(greet("Max")); // 'Hello, Max!'
// console.log(greet()); // 'Hello, Guest!'

// function greet(name) {
//   return `Hello, ${name || "Guest"}!`;
// }

// function greet(name) {
//   return `Hello, ${name || "Guest"}!`;
// }

// Написати функцію getPurchaseInfo, яка приймає назву товару, його ціну та кількість. Функція повинна повертати рядок із загальною вартістю покупки.
// console.log(getPurchaseInfo("Book", 20, 3));
// // 'You bought 3 Book(s). Total: 60 USD.'

// console.log(getPurchaseInfo("Pen", 5, 4));
// // 'You bought 4 Pen(s). Total: 20 USD.'

// function getPurchaseInfo(name, price, quantity) {
//   return `You bought ${quantity} ${name}${quantity === 1 ? "" : "(s)"}. Total: ${price * quantity} USD.`;
// }
