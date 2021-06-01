//3
// Добрый день, неправильно)
// Должны быть только ифы)
// Без if else
// и без else

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "Your order is empty!";
//   } else if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   } else {
//     return "The order is accepted, our manager will contact you";
//   }
// }

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//    return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   } 
// return "The order is accepted, our manager will contact you";
// }

//8
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex]
// console.log(lastElement)


//11
// function calculateEngravingPrice(message, pricePerWord) {
//   const price = message.split(' ').length * pricePerWord;
//   return price;
// }

// calculateEngravingPrice("Web-development is creative work", 40)

//12
// function makeStringFromArray(array, delimeter) {
//   let string = array.join(delimeter);
//   return string;
// }

//13
// function slugify(title) {
//   return title.toLowerCase().split(' ').join('-')
// }
// slugify('java ScRI pt')

//14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, (fruits.length - 1));
// const lastThreeEls = fruits.slice(-3);