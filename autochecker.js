// 1
// function makePizza() {
//   return 'Ваша пицца готовится, ожидайте.';
// }

// const result = makePizza();
// const pointer = makePizza;
// console.log(result);
// console.log(pointer);

//2

function deliverPizza(pizzaName) {
  return `Доставляем пиццу ${pizzaName}.`;
}

function makePizza(pizzaName) {
  return `Пицца ${pizzaName} готовится, ожидайте...`;
}

// Пиши код ниже этой строки
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

// 3

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       return onError(pizzaName);
//     }
//     return onSuccess(pizzaName)
//   }
// }

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! В ассортименте нет пиццы с названием ${error}`;
// }

// // Вызовы метода с колбэками
// console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));;
// console.log(pizzaPalace.order('Четыре нарезона', makePizza, onOrderError));
// console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
// console.log(pizzaPalace.order('Венская', makePizza, onOrderError));


// 5

const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  // Пиши код ниже этой строки
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName, checkPizza) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `В ассортименте нет пиццы с названием «${pizzaName}».`;
    }

    return `Заказ принят, готовим пиццу «${pizzaName}».`;
  },
  // Пиши код выше этой строки
};

console.log(pizzaPalace.order('Аль Копчино'));

// 6

const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  // Пиши код ниже этой строки
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Пиши код выше этой строки
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']

// 7
const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки
function composeMessage(position) {
  for (const item of arr) {
    console.log(item);
  }
  // return 	`Готовим <блюдо> для <почта>. Ваш заказ ${position}-й в очереди.`;
}

const messages = [];
console.log(composeMessage.call(orders));