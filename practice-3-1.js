/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 */

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    const items = this.items;
    for (let item of items) {
      if (item.name === product.name) {
        this.increaseQuantity(product.name);
        return 
      }
    }
    let newProduct = {
      ...product,
      quantity: 1
    }
    return items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;
    for (let i = 0; i < items.length; i += 1) {
      if (items[i].name === productName) {
        items.splice(i, 1)
      }
    }
   },
  clear() {
    return items = [];
  },
  
  countTotalPrice() {
    let totalPrice = 0;
    for (let item of this.items) {
      totalPrice += item.price;
    }
    return totalPrice;
  },
  increaseQuantity(productName) {
    for (let item of this.items) {
      if (item.name === productName) {
        item.quantity += 1;
        item.price *= item.quantity;
      }
    }
  }, 
  decreaseQuantity(productName) {
    for (let item of this.items) {
      if (item.name === productName) {
        item.price /= item.quantity;
        item.quantity -= 1;
        item.price *= item.quantity;
      }
    }
   },
}

console.log(cart.getItems());

cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());




//v2
// function countProps(object) {
  
//   let propCount = 0;

//  propCount = (Object.keys(object)).length;

//   return propCount;
  
// }

// Можем ли мы использовать this вместо hotel в этом примере из конспекта?
// const
//   hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// const keys = Object.keys(hotel);
// const values = Object.values(hotel);
// const entries = Object.entries(hotel);
// const obj = Object.fromEntries(entries);

// console.log(`keys`, keys);
// console.log(`values`, values);
// console.log(`entries`, entries);
// console.log(`obj`, obj);


// Optional Chaining ?.

// const car = {
//     speed: {
//       value: 150,
//       unit: "mph",
//     },
//     doors: 5,
//   };
// console.log(car.wheels.value);
// console.log(car.speed?.value);
// console.log(car.speed?.whatever);
// console.log(car.speed?.whatever?.value);

// 1)  Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
  premium: true,
  showUser() {
    const keys = Object.keys(this);
    for (let key of keys) {
      return `${key}: ${this[key]}`
    }
  }
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
console.log(user.showUser());


// 2) У нас есть объект, в котором хранятся зарплаты нашей команды.
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
// Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
  Alisha:
    200,
  sum() {
    let total = 0;
    let allSalaries = Object.values(salaries);
    for (let salary of allSalaries) {
      if (!isNaN(salary)) {
        total += salary;
      };
    }
    return total;
  }
};
console.log('salaryes sum :>> ', salaries.sum());

// 3) Напишите ф - цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов и строку с названием камня.
// Ф - ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта

const stones = [
  { name: "Изумруд", price: 1300, quantity: 4 },
  { name: "Бриллиант", price: 2700, quantity: 3 },
  { name: "Сапфир", price: 400, quantity: 7 },
  { name: "Щебень", price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
  let totalPrice = 0;
  for (let {name, price, quantity} of stones) {
    if (stoneName === name) {
     totalPrice = price * quantity
    }
  }
  return totalPrice;
}

console.log(`Бриллиант`, calcTotalPrice(stones, "Бриллиант")); // 8100
console.log('Сапфир', calcTotalPrice(stones, 'Сапфир'));

// 4) Создайте объект calculator(калькулятор) с тремя методами:
// read(a, b)- запрашивает два значения и сохраняет их как свойства объекта.
// sum() - возвращает сумму сохранённых значений.
// mult() - перемножает сохранённые значения и возвращает результат.
const calculator = {
  a: 0,
  b: 0,
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mult() {
    return this.a * this.b;
  }
}
calculator.read(4, 5)
console.log(calculator.sum());

// 5) Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };

//   /*
//    * Каждая транзакция это объект со свойствами: id, type и amount
//    */

  const account = {
    // Текущий баланс счета
    balance: 0,

    // История транзакций
    transactions: [],

    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
      const id = this.transactions.length + 1
      return { amount, type, id };
    }, 

    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
      const transaction = this.createTransaction(amount, type = 'deposit');  
      this.transactions.push(transaction);
      return this.balance += amount;
    }, 

    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
      const transaction = this.createTransaction(amount, type = 'withdraw');  
      this.transactions.push(transaction);
      return this.balance -= amount;
    },

    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
      return this.balance;
    },

    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
      for (const transaction of this.transactions) {
        let { id: ident } = transaction;
        if (id === ident) {
          return transaction;
        }
      }
    },

    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
      let total = 0;
      for (const { type: transactionType, amount } of this.transactions) {
        if (type === transactionType) {
          total += amount;
        }
      } return `Общая сумма транакций типа: ${type} составляет ${total}`;
    },
};
  
console.log(account.balance);
console.log('balance after transaction type: deposit', account.deposit(400));
console.log('balance after transaction type: withdraw', account.withdraw(200));
account.deposit(300)
account.withdraw(260)
account.deposit(600)
account.withdraw(700)
console.table(account.transactions);
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionTotal('deposit'));