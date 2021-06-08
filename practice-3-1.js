/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (let i = 0; i < this.items.length; i += 1) {
      this.items[i].quantity = 1; //?
      if (this.items[i].name === product.name) {
        this.items[i].quantity += 1;
        return;
      }
    }
    this.items.push(product);
  },
  remove(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].name === productName) {
        this.items.splice(i, 1)
      }
    }
   },
  clear() {
    return this.items = [];
   },
  // countTotalPrice() { },
  // increaseQuantity(productName) { },
  // decreaseQuantity(productName) { },
}

cart.add({ name: '🍇', price: 70 })
cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍋', price: 60 })
// cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
console.table(cart.getItems())
// console.table(cart.remove('🍇'))
// console.table('cart3: ', cart.getItems())


// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;

//     for (let i = 0; i < items.length; i += 1) {
//       const item = items[i];

//       if (productName === item.name) {
//         console.log('нашли такой продукт ', productName);
//         console.log('индекс: ', i);

//         items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;

//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }

//     return total;
//   },
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// console.log(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍇', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });

// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// cart.remove('🍇');
// console.table(cart.getItems());

// // cart.clear();
// // console.log(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// // cart.increaseQuantity('🍎');
// // console.table(cart.getItems());

// // cart.decreaseQuantity('🍋');
// // cart.decreaseQuantity('🍋');
// // console.table(cart.getItems());