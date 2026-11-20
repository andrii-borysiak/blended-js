/*Task-1*/
// Написати функцію getAverageGrade, яка приймає три оцінки та повертає середній бал, округлений до двох знаків після коми.
// console.log(getAverageGrade(10, 9, 8)); // '9.00'
// console.log(getAverageGrade(12, 10, 9)); // '10.33'
// console.log(getAverageGrade(7, 8, 10)); // '8.33'

// function getAverageGrade(grade1, grade2, grade3) {
//   return ((grade1 + grade2 + grade3) / 3).toFixed(2);
// }

/*Task-2*/
// Написати функцію convertToUah, яка приймає суму в доларах та курс долара і повертає суму в гривнях з двома знаками після коми.
// console.log(convertToUah(10.5, 41.25)); // '433.13'
// console.log(convertToUah(20, 40.5)); // '810.00'
// console.log(convertToUah(15.75, 42)); // '661.50'

// function convertToUah(dollars, exchangeRate) {
//   return (dollars * exchangeRate).toFixed(2);
// }

/*Task-3*/
// Написати функцію getRandomLetter, яка приймає слово та повертає випадкову літеру з цього слова.
// console.log(getRandomLetter("JavaScript")); // наприклад, 'a'
// console.log(getRandomLetter("Привіт")); // наприклад, 'в'
// console.log(getRandomLetter("Компьютер")); // наприклад, 'п'

// function getRandomLetter(word) {
//   return word[Math.round(Math.random() * (word.length - 1))];
// }

/*Task-4*/
// Написати функцію generateTicket, яка генерує випадкове ціле число від 1000 до 9999.
// Функція повинна повернути номер квитка у вигляді рядка
// та кількість символів у ньому.
// console.log(generateTicket()); // 'Квиток №4821. Кількість цифр: 4.'
// console.log(generateTicket()); // 'Квиток №1937. Кількість цифр: 4.'

// function generateTicket() {
//   const randomNumber = Math.floor(Math.random() * 8999 + 1000);
//   return `Квиток №${randomNumber}. Кількість цифр: ${String(randomNumber).length}`;
// }

/*Task-5*/
// Написати функцію getCandyOrder, яка приймає ціну однієї цукерки,
// кількість цукерок та суму грошей покупця.
// Функція повертає загальну вартість покупки та решту.
// Усі грошові значення округлити до двох знаків після коми.
// console.log(getCandyOrder(5.5, 10, 100));
// ("Вартість: 55.00 грн. Решта: 45.00 грн.");
// console.log(getCandyOrder(7.25, 4, 50));
// ("Вартість: 29.00 грн. Решта: 21.00 грн.");

// function getCandyOrder(price, quantity, money) {
//   return `Вартість: ${(price * quantity).toFixed(2)} грн. Решта: ${(money - price * quantity).toFixed(2)}`;
// }

/*Task-6*/
// Написати функцію calculateTripCost, яка приймає:
// кількість кілометрів, витрату пального на 100 км та ціну одного літра пального.
// Функція повертає загальну вартість пального для подорожі.
// Результат округлити до двох знаків після коми.
// console.log(calculateTripCost(500, 8, 55));
// 'Вартість подорожі: 2200.00 грн.'
// console.log(calculateTripCost(250, 6.5, 60));
// 'Вартість подорожі: 975.00 грн.'

// function calculateTripCost(totalkms, fuel100km, literprice) {
//   return `Вартість подорожі: ${((fuel100km / 100) * totalkms * literprice).toFixed(2)} грн.`;
// }

/*Task-7*/
// Написати функцію splitBill, яка приймає загальний рахунок,
// кількість людей та відсоток чайових.
// Функція повинна додати чайові до рахунку та поділити суму порівну між людьми.
// Результат округлити до двох знаків після коми.
// console.log(splitBill(1000, 4, 10));
// 'Загальний рахунок: 1100.00 грн. З кожного: 275.00 грн.'
// console.log(splitBill(850, 3, 15));
// 'Загальний рахунок: 977.50 грн. З кожного: 325.83 грн.'

// function splitBill(bill, people, tipPercent) {
//   return `Загальний рахунок: ${(bill * (1 + tipPercent / 100)).toFixed(2)} грн. З кожного: ${((bill * (1 + tipPercent / 100)) / people).toFixed(2)} грн.`;
// }

/*Task-8*/
// Написати функцію calculateSalary, яка приймає:
// кількість відпрацьованих годин, оплату за годину та відсоток податку.
// Функція повинна повернути зарплату до та після вирахування податку.
// Результат округлити до двох знаків після коми.
// console.log(calculateSalary(160, 200, 18));
// 'До податку: 32000.00 грн. Після податку: 26240.00 грн.'
// console.log(calculateSalary(120, 150, 15));
// 'До податку: 18000.00 грн. Після податку: 15300.00 грн.'

// function calculateSalary(hours, payPerHour, taxes) {
//   const totalSalary = hours * payPerHour;
//   const pureSalary = totalSalary - (totalSalary * taxes) / 100;
//   return `До податку: ${totalSalary.toFixed(2)} грн. Після податку: ${pureSalary.toFixed(2)} грн.`;
// }

/*Task-9*/
// Написати функцію convertMinutes, яка приймає загальну кількість хвилин.
// Функція повинна визначити кількість повних годин та залишок хвилин.
// Використати Math.floor() та Math.round() там, де це доречно.
// console.log(convertMinutes(135))
// '2 години 15 хвилин'
// console.log(convertMinutes(245));
// '4 години 5 хвилин'
// console.log(convertMinutes(60));
// '1 година 0 хвилин'

// function convertMinutes(minutes) {
//   return `${Math.floor(minutes / 60)} години ${minutes % 60} хвилин`;
// }

/*Task-10*/
// Написати функцію calculateDiscount, яка приймає ціну товару,
// відсоток першої знижки та відсоток другої знижки.
// Функція повинна визначити, яка знижка більша,
// та застосувати лише її до початкової ціни.
// Повернути початкову ціну, кінцеву ціну та суму економії.
// Усі результати округлити до двох знаків після коми.
// console.log(calculateDiscount(1000, 10, 20));
// 'Початкова ціна: 1000.00 грн. Кінцева ціна: 800.00 грн. Економія: 200.00 грн.'
// console.log(calculateDiscount(500, 15, 10));
// 'Початкова ціна: 500.00 грн. Кінцева ціна: 425.00 грн. Економія: 75.00 грн.'

// function calculateDiscount(itemPrice, firstDiscount, secondDiscount) {
//   const discount =
//     firstDiscount > secondDiscount ? firstDiscount : secondDiscount;
//   const finalPrice = itemPrice - (itemPrice * discount) / 100;
//   return `Початкова ціна: ${itemPrice.toFixed(2)} грн. Кінцева ціна: ${finalPrice.toFixed(2)} грн. Економія: ${(itemPrice - finalPrice).toFixed(2)} грн.`;
// }

/*Task-11*/
// Написати функцію generatePromoCode, яка генерує чотири випадкових числа від 0 до 9.
// Повернути промокод у вигляді рядка та його довжину.
// console.log(generatePromoCode());
// 'Ваш промокод: 5831. Довжина: 4'
// console.log(generatePromoCode());
// 'Ваш промокод: 0274. Довжина: 4'

// function generatePromoCode() {
//   const random = (Math.random() * 9.999).toFixed(3);
//   const result = String(random).replace('.', '');
//   return `Ваш промокод: ${result}. Довжина: ${result.length}`;
// }

// function generatePromoCode() {
//   // const randomNumber = parseInt(Math.random() * 8999 + 1000);
//   // return `Ваш промокод: ${randomNumber}. Довжина: 4`;

//   const randomNumber = Math.floor(Math.random() * 8999 + 1000);
//   return `Ваш промокод: ${randomNumber}. Довжина: 4`;
// }

/*Task-12*/
// Запитати ім'я, прізвище та вік користувача через prompt().
// Створити функцію getUserInfo, яка повертає:
// повне ім'я, довжину повного імені та вік.
// Додатково порівняти вік користувача з числом 18
// за допомогою оператора >=.
// Вивести всю інформацію через alert().

// function getUserInfo() {
//   const name = prompt("Ім'я:");
//   const surname = prompt('Прізвище:');
//   const age = prompt('Вік:');
//   const fullName = name + ' ' + surname;
//   return `Повне ім'я: ${fullName}\nДовжина повного імені: ${fullName.length}\nВік: ${age}\nПовнолітній: ${age >= 18}`;
// }

// alert(getUserInfo());
