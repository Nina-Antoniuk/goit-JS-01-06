class Person {
  constructor({ firstName, lastName, age, gender, interest }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interest = interest;
  }

  greeting() {
    console.log(`Привет я ${this.firstName} ${this.lastName}`);
  }
  
  bio() {
    console.log(`Привет ${this.firstName} мне ${this.age} лет. Мне нравиться ${this.interest}`);
  }

}

const user = new Person( {firstName: 'Karina', lastName: 'Smith', age: 16 , gender: 'female', interest: 'Astronomy'} )
console.log('user', user);

class Teacher extends Person {
  constructor( {firstName, lastName, age, gender, interest, subject} ) {
    super({firstName, lastName, age, gender, interest})
    this.subject = subject;
  }
}

const teacher = new Teacher({firstName: 'Salazar', lastName: 'Dou', age: 40, gender: 'male', interest: 'football', subject: 'history'})
console.log('teacher :>> ', teacher);

class Student extends Person {
  constructor({firstName, lastName, age, gender, interest}) {
    super({firstName, lastName, age, gender, interest})
  }

  greeting () {
   console.log("Hello, I am student");
  }
}

const student = new Student({firstName: 'Bob', lastName: 'Low', age: 26, gender: 'male', interest: 'coocking'})
console.log(student)



class Blog {
  constructor(email) {
    this.email = email;
  }
}

class Post extends Blog {
  constructor(email, post) {
    super(email);
    this.post = post;
  }

  getInfo() {
    return `this post from ${this.email}`
  }
}

const blog = new Blog("google.@gmail.com");
console.log(`blog`, blog);

const post = new Post("test@gmail.com", "Best post ever");
console.log(`post`, post);

console.log('getInfo(); :>> ', post.getInfo());



// class Phone {
//   #color;
//   #price;
//   #brand;

//   constructor({ brand, color, price }) {
//     this.#brand = brand;
//     this.#color = color;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   get price() {
//     return this.#price;
//   }

//   get color() {
//     return this.#color;
//   }

//   //   getPrice() {
//   //     return this.#price;
//   //   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }

//   changeBrand(newBrand) {
//     this.brand = newBrand;
//   }

//   updateColor(newColor) {
//     this.color = newColor;
//   }

//   setPrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// const LG = new Phone({ brand: "LG", price: "1000", color: "red" });

// console.log(`LG`, LG);
// // LG.#price = 2000;
// console.log("price", LG.price);
// LG.price = 2000;
// console.log("price", LG.price);

// console.log('price', LG.getPrice())

// console.log(LG.getBrand());
// console.log(LG.changeBrand("Samsung"));
// console.log(LG.brand);
// LG.#brand = "Sony";
// console.log(LG.getBrand());

// 1) Напиши класс User для создания пользователя со следующим свойствами:
// username - имя, строка
// age - возраст, число
// numberOfPosts - кол-во постов, число
// Класс ожидает 1 параметр - объект настроек с одноимёнными свойствами.

// Добавь метод getInfo(), который, возвращает строку:
// User ${ имя } is ${ возраст } years old and has ${ кол - во постов } posts.

class User {
  constructor({name, age, numberOfPosts}) {
    this.name = name;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
  }

  getInfo () {
    return `User ${this.name} is ${ this.age } years old and has ${ this.numberOfPosts } posts.`
  }
}

const mango = new User({
  name: "Mango",
  age: 24,
  numberOfPosts: 20,
});


class SuperUser extends User {
  constructor({name, age, numberOfPosts}) {
    super({name, age, numberOfPosts})
  }
}

const bob = new SuperUser({
  name: "Bob",
  age: 43,
  numberOfPosts: 12,
});

console.log(`mango`, mango);

console.log(mango.getInfo()); // User Mango is 24 years old and has 20 posts
// console.log(mango.greeting());

console.log(`bob`, bob);

console.log(bob.getInfo()); // User Mango is 24 years old and has 20 posts
// console.log(bob.greeting());

  const poly = new User({
    name: 'Poly',
    age: 19,
    numberOfPosts: 17,
  });

  console.log(poly.getInfo()); // User Poly is 19 years old and has 17 posts

// 3) Напиши класс Storage который создаёт объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив товаров.
// addItem(item) - получает новый товар и добавляет его к текущим.
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих.

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1)
  }
}

const store = new Storage(["Яблоки", "Бананы", "Кокосы", "Киви"]);
console.log(store);

const items = store.getItems();

store.addItem("Манго");
store.removeItem("Киви");

console.table(items);


// 4) Напиши класс Client который создаёт объект со свойствами login и email.
// Объяви приватные свойства #login и #email, доступ к которым сделай через геттер и сеттер login и email.


class Client {
  #login
  #email
  constructor({ login, email }) {
    this.#login = login;
    this.#email = email;
  }

  get login() {
    return this.#login;
  }

  set login(newlogin) {
    this.#login = newlogin;
  }

  get email () {
    return this.#email;
  }

  set email(newemail) {
    this.#email = newemail;
  }
}

const avocado = new Client({
  login: "Avocado",
  email: "avocado@dog.woof",
});

console.log(`avocado`, avocado);
console.log(avocado.login); // Avocado
avocado.login = "MangoAvocado";
console.log(avocado.login); // MangoAvocado
console.log(Client.priority);

  const lorry = new Client({
    login: 'Lorry',
    email: 'lorry@mail.com',
  });

  console.log(lorry.login); // Lorry
  lorry.login = 'Lorrycutie';
console.log(lorry.login); // Lorrycutie
  


// 5)  Напиши клас Notes который управляет коллекцией заметок в свойстве items.
// Заметка это объект со свойствами text и priority.
// Добавь конструктору статическое свойство Priority, в котором будет храниться объект с приоритетами.
// {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high'
//   }
// let id = Date.now();

class Notes {

  static Priority = {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high'
  }

  constructor(items) {
    this.items = items;
  }

  addNote({text, priority}) {
    let id = Date.now();
    this.items.push({text, priority, id})
  }

  removeNote(text) {
    for (const el of this.items) {
      if (el.text === text) {
        this.items.splice(this.items.indexOf(el), 1)
      }
    }
  }

  updateNote(text, newPriority) {
    for (const el of this.items) {
      if (el.text === text) {
        el.priority = newPriority;
      }
    }
  }
}

const myNotes = new Notes([]);
myNotes.addNote({text: 'my first post', priority: 'low'})
console.log(myNotes);


myNotes.addNote({  text: 'Моя первая заметка', priority: Notes.Priority.LOW })
console.log(myNotes.items);

myNotes.addNote({ text: 'Моя вторая заметка', priority: Notes.Priority.NORMAL })
console.log(myNotes.items);

myNotes.removeNote('Моя первая заметка');
console.log(myNotes.items);

myNotes.updateNote('Моя вторая заметка', Notes.Priority.HIGH);
console.log(myNotes.items);

// class Guest {
//   // Собственные свойства класса размещаем в конструкторе
//   #name;
//   constructor(name, roomNumber) {
//     this.#name = name;
//     this.roomNumber = roomNumber;
//   }

//   // Используем геттеры и сеттеры для описания интерфейса доступа к свойствам
//   get name() {
//     return this.#name;
//   }

//   set name(value) {
//     this.#name = value;
//   }
// }

// const mango = new Guest("Mango", 26);
// console.log(`mango`, mango);

// // обращение к get и set не требует вызова - т.е. без ()
// console.log(mango.name); // Mango

// mango.name = "Mango the Fluffy";
// console.log(mango.name); // Mango the Fluffy