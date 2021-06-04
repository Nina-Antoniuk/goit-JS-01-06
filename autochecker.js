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

//16
// function makeArray(firstArray, secondArray, maxLength) {
// 	const newArray = firstArray.concat(secondArray);
//   	if(newArray.length > maxLength) {
//       return newArray.slice(0, maxLength);
//     }
// 	return newArray;
// }

// console.log(makeArray([1, 2, 3, 4, 5], [6, 7, 8], 5))

//17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { 
//   console.log(i);
// }

// 18
// function calculateTotal(number) { 
//   let sum = 0;
//   for (let i = 1; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
// }

// calculateTotal(1.5)

//19
// function findLongestWord(string) {
//   const array = string.split(' ');
//   let longestString = array[0];
//   for (let i = 0; i < array.length; i += 1) {
//     if (longestString.length < array[i].length) {
//       longestString = array[i];
//     }
//   }
//   return longestString;
// }

// console.log(findLongestWord('hello my dear javascript'))

//20

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
// 	for(let i = min; i <= max; i +=1) {
//     numbers.push(i);
//     }
//   return numbers;
// }

// console.log(createArrayOfNumbers(5, 10))

//21
// function filterArray(numbers, value) {
//   let newArray = [];
//   for (number of numbers) {
//     if (number > value) {
//       newArray.push(number);
//     }
//   }
//   return newArray;
// }
// console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 5))

//24
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
	
//   return fruits.includes(fruit); // Change this line
// }

//25
// function getCommonElements(array1, array2) {
//   let newArray = [];
//   for (num of array1) {
//     if (array2.includes(num)) {
//       newArray.push(num);
//    }
//   }
//   return newArray;
// }
// console.log(getCommonElements([1,2,3], [1,4,5,3]))

//28
// const a = 3 % 1;
// console.log('a - ' + a);

// const b = 4 % 3;
// console.log('b - ' + b);

// const c = 11 % 4;
// console.log('c - ' + c);

// const d = 12 % 7;
// console.log('d - ' + d);

// const e = 8 % 6;
// console.log('e - ' + e);

//29
// function getEvenNumbers(start, end) {
//   let evenNumbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   return evenNumbers;
// }
// console.log(getEvenNumbers(11, 20))

//31
// function findNumber(start, end, divisor) {
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }

//32

// function includes(array, value) {
//   for(item of array) {
//     if(item === value) {
//         return true;
//     }
//   }
//   return false;
// }

// function includes(array, value) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
// }

