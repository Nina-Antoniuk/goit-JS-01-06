//Посчитать суму товаров в козине магазина
// Нужно ввести цену 3-х товаров и посчитать их суму

// const phonePrice = Number(prompt('phone price'));
// const tvPrice = Number(prompt('tv price'));
// const playStationPrice = Number(prompt('play station price'));
// console.log(phonePrice + tvPrice + playStationPrice);

// const a = Number(prompt('enter number a', ''));
// const b = Number(prompt('enter number b', ''));
// let result;

// if (b + a < 10) {
//   result = '<10';
// } else {
//   result = '>10';
// }

// console.log(result);

// result = a > b ? a : 'no';
// console.log(result);

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && "hello");

// console.log(true && 0 && "hello");

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log(null || 2 && 3 || 4);


// Опертор %
// // Написать программу которая получит от пользователя число и определит четное это число или не четное.

// const num = Number(prompt('enter your number please'));
// if (num % 2 === 0) {
//   console.log('your number is even');
// } else {
//   console.log('odd');
// }

// Написать программу где мы спрашиваем у пользователя месяц 
//его рождения и показываем в какое время года он родился

// const month = prompt('enter month of your birthday please');
// switch (month) {
//   case 'june':
//   case 'julie':
//   case 'augest':
//     console.log('youre birthday in summer');
//     break;
//   case 'september':
//   case 'october':
//   case 'november':
//     console.log('осінь');
//     break;
//   case 'march':
//   case 'april':
//   case 'may':
//     console.log('spring');
//     break;
//   case 'december':
//   case 'jenuary':
//   case 'febreary':
//     console.log('winter');
//     break;
// }

// Если пользователь вводит 2 - показываем слово Зима
// Добавить проверку на ввод данных - ето должно быть числом целым и 
//положительным


// Написать программу которая проверяет логин и пароль пользователя и выводит приветствие - если все отлично и ошибку если неверный логин

// const login = 'user@gmail.com';
// const password = '12345'


// if...else и prompt
// // Используя конструкцию if..else, напишите код, который будет спрашивать: «Какое количество месяцев в году». 
//Если пользователь вводит 12 , то показать: «Верно!», в противном случае – отобразить: «Не знаете? 12t!»

// let month = Number(prompt('Сколько месяцев в году?'));
// if (month !== 12) {
//   console.log('error');
// } else {
//   console.log('Yes, there are 12 month in a year')
// }

// Тернарный оператор
// // Перепишите if...else с использованием тернарного оператора.

// const a = 1;
// const b = 2;
// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
// let result = a + b < 4 ? 'Мало' : 'Много';
// console.log(result)

//  Логические операторы и if
// // Напишите условие if для проверки, что переменная age находится 
//в диапазоне между 14 и 90 включительно.«Включительно» означает, что 
//значение переменной age может быть равно 14 или 90.

// const min = 14;
// const max = 90;
// const age = 30;

// if (age >= min && age <= max) {
//   console.log('ok')
// } else {
//   console.log('no')
// }

// if (age < 14 && age > max) {
//   console.log('error')
// } else {
//   console.log('ok')
// }

// Опертор %
// Написать программу которая получит от пользователя число и определит 
// четное это число или не четное.

// let num = Number(prompt('put your number'));

// if (num % 2 === 0) {
//   console.log('even number')
// } else {
//   console.log('odd number')
// }

// switch (num % 2) {
//   case 0:
//     console.log('even number!');
//     break;
//   default:
//     console.log('odd number!')
// }

// Написать программу где мы спрашиваем у пользователя месяц его 
// рождения и показываем в какое время года он родился

// let data = Number(prompt('put month of your birthday'))
// if (data === 1 || data === 2 || data === 12) {
//   console.log('winter');
// } else if (data >= 3 && data <= 5) {
//   console.log('spring');
// } else if (data >= 6 && data <= 8) {
//   console.log('summer')
// } else if (data >= 9 && data <= 11) {
//   console.log('autumn');
// } else {
//   console.log('error enter')
// }

// switch (data) {
//   case 1:
//   case 2:
//   case 12:
//     console.log('winter');
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log('spring');
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log('summer');
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log('autumn');
//     break;
//   default:
//     console.log('error enter');
// }

// Если пользователь вводит 2 - показываем слово Зима
// Добавить проверку на ввод данных - ето должно быть числом 
// целым и положительным

// if (data > 0 && Number.isInteger(data)) {
//   switch (data) {
//     case 1:
//     case 2:
//     case 12:
//       console.log('winter');
//       break;
//     case 3:
//     case 4:
//     case 5:
//       console.log('spring');
//       break;
//     case 6:
//     case 7:
//     case 8:
//       console.log('summer');
//       break;
//     case 9:
//     case 10:
//     case 11:
//       console.log('autumn');
//       break;
//     default:
//       console.log('error enter');
//   }
// } else{ console.log('no')}

// Написать программу которая проверяет логин и пароль пользователя 
//и выводит приветствие - если все отлично и ошибку если неверный логин

// const login = 'user@gmail.com';
// const password = '12345'

// let userLogin = prompt('enter your login');
// let userPassword = prompt('enter your password');

// if (userLogin === login && userPassword === password) {
//   alert('welcome')
// } else {
//   alert('try again')
// }

// Написать программу которая получит от пользователя число (количество 
//минут) и выведёт на экран строку в формате часов и минут.

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24:1

// let minutes = prompt('put here minutes');

// const houers = Number(minutes) / 60;
// console.log(houers.toFixed(2))

// Написать игру камень - ножницы - бумага для игры с компютером
// Компютер загадывает свой вариант, юзер вводит свой и ми видим
//кто вииграл

// const answers = ['камень', 'ножницы', 'бумага'];
// let random = answers[Math.round(Math.random() * answers.length)];
// let userVar = prompt('enter your var');
// console.log(`${random} VS ${userVar}`)