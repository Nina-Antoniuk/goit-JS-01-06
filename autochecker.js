//4

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// console.log(ownerName);

// const ownerPhone = apartment.owner.phone;
// console.log(ownerPhone);

// const ownerEmail = apartment.owner.email;
// console.log(ownerEmail);

// const numberOfTags = apartment.tags.length;
// console.log(numberOfTags);

// const firstTag = apartment.tags[0];
// console.log(firstTag);

// const lastTag = apartment.tags[apartment.tags.length - 1];
// console.log(lastTag);


//6

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// console.log(apartment);

// apartment.price = 5000;
// apartment.rating = 4.7;
// aapartment.owner.name = 'Henry Sibola';
// apartment.tags.push("trusted");

// console.log(apartment);

// 9

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam"
// };


// 10

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (key in apartment) {
//   keys.push(key)
// 	values.push(apartment[key])
// }
// console.log(keys);
// console.log(values);

//11

// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
// 	if(apartment.hasOwnProperty(key)) {
//        keys.push(key);
//   		values.push(apartment[key]);
//     }
// }


//12

// function countProps(object) {
//   let propCount = 0;
//   for (key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// }
// console.log('coutn :>> ', countProps({name: 'Nic', age: 12, isCool: true}));


//13

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// console.log(keys);
// for (key of keys) {
//   values.push(apartment[key])
// }
// console.log(values);


//14

// function countProps(object) {
//   let propCount = 0;
//   let keys = Object.keys(object);
//   for (let key of keys) {
//     propCount += 1;
//   }
//   return propCount;
// }
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


//16

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   let allValues = Object.values(salaries)
//   for (let value of allValues) {
//     totalSalary += value;
//   }
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));


//17

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for(let color of colors) {
// 	hexColors.push(color.hex);
//   	rgbColors.push(color.rgb)
// }

// console.log(hexColors, rgbColors);


//18

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (let product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));


//19

/*Напиши функцию getAllPropValues(propName)
которая принимает один параметр propName - имя(ключ)
свойства.Функция должна вернуть массив всех значений свойства
с таким именем из каждого объекта в массиве products.Если в
объектах нет свойства с таким именем, функция должна вернуть пустой массив.*/

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 }, //product
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const values = [];
//   for (let product of products) {
//     if (product[propName]) {
//       values.push(product[propName]);    
//     }
//   }
//   return values;
// }

// console.log(getAllPropValues("name"));   // ['Radar', 'Scanner', 'Droid', 'Grip']
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));


//20

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let sum = 0;
//   for(product of products) {
//     if (product.name === productName) {
//       sum = product.price * product.quantity;
//     }
//   }
//   return sum;
// }

// console.log(calculateTotalPrice("Radar"));



// 22

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {
//   yesterday, 
//   today, 
//   tomorrow, 
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures
// const meanTemperature = (yesterday + today + tomorrow) / 3;


// 23

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature);
// console.log(highIcon);


// 25

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }
// } = forecast;


// 26

function calculateMeanTemperature(forecast) {
const  {
  today: { low: todayLow, high: todayHigh },
  tomorrow: { low: tomorrowLow, high: tomorrowHigh }
} = forecast;
  
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

console.log(calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }));


// 29

const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = { ...defaultSettings, ...overrideSettings};
console.log(finalSettings);


// 30

function makeTask(data) {
  const { text, priority = 'Normal', completed = false, category = 'General' } = data;
	return {text, priority, completed, category}
}

console.log(makeTask({ category: "General", priority: "Normal", completed: false }));
console.log({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' });


// 31

// function add(...args) {
//   let sum = 0;
//   for (let item of args) {
//     sum += item;
//   }
//   return sum;
// }

// console.log(add(1, 2, 3, 4, 5));


// 32

function addOverNum(num, ...args) {
  let total = 0;
  for (const arg of args) {
    if(arg > num) {
    total += arg;
    }
  }
  return total;
}
console.log(addOverNum(50, 15, 27));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));


// 33

function findMatches(arr, ...args) {
  const matches = [];
  for (let arg of args) {
    if (arr.includes(arg)) {
      matches.push(arg);
    }
  }
  return matches;
}
console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// 34 

// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {  
//     return `Updating book ${oldName} to ${newName}`;
//   }
// };
// console.log(bookShelf.getBooks());



//35

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     let book = this.books;
//     book.splice(book.indexOf(oldName), 1, newName)
//   },
// };

// console.log(bookShelf.updateBook('Haze', 'Aze'));


// 39

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     const potion = this.potions
//     potion.splice(potion.indexOf(potionName), 1);
//   },
// };

// console.log(atTheOldToad.removePotion("Dragon breath"));


// 40

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     const potion = this.potions;
//     potion.splice(potion.indexOf(oldName), 1, newName)
//   },
// };

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.log(atTheOldToad.potions);


//41

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    this.potions.push(potionName);
  },
  removePotion(potionName) {
    const potions = this.potions;
    for (let potion of potions) {
      if (potion.name === potionName) {
        potions.splice(potions.indexOf(potion), 1);
      }
    }
  },
  updatePotionName(oldName, newName) {
    for (let potion of this.potions) {
        if (potion.name === oldName) {
          potion.name = newName;
      }
    }
  },
};

atTheOldToad.removePotion('Dragon breath')
console.log(atTheOldToad.potions);
