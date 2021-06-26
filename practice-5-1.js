// 1) Написать ф - ю конструктор которая создает обект person с такими ключами
// const person = {
//   firstName,
//   lastName,
//   age,
//   gender,
//   interest,
//   bio() {
//     // виводить строку Привет {имя} мне {возраст} лет. Мне нравится {интерес}
//   },
//   greeting() {
//     // Привет, я {имя}
//   },
// };
// 2) Вынести методы из обекта person в __proto__

const Person = function ({ firstName, lastName, age, gender, interest }) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
  this.interest = interest;
}

Person.prototype.bio = function() {
 return `Привет я ${this.firstName} мне ${this.age} лет. Мне нравится ${this.interest}` ;
};

Person.prototype.greeting = function() {
  return `Привет, я ${this.firstName} ${this.lastName}`;
}

console.log('Person.prototype :>> ', Person.prototype);


const user = new Person({ firstName: 'Jhon', lastName: 'Dou', age: 35, gender: 'male', interest: 'medicine' });
console.log('user :>> ', user);

console.log('Person.prototype === user.__proto__ :>> ', Person.prototype === user.__proto__);
// console.log('user.prototype :>> ', user.prototype); // undefined

console.log('user :>> ', user);
console.log('user.firstName :>> ', user.firstName);
console.log('user.bio :>> ', user.bio());
console.log('user.greeeting :>> ', user.greeting());


// 3) Создать конструктор Teacher который наследует свойства Person и добавляет в обект поле subject
// и метод greeting

// 3) Создать конструктор Teacher который наследует свойства Person и добавляет в обект поле subject
// и метод greeting


function Teacher(config) {
  const { subject } = config;
  Person.call(this, config);
  this.subject = subject;
}


Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

const teach = new Teacher({firstName: 'Jim', lastName: 'Dou', age: 60, gender: 'male', interest: 'phisics', subject: 'phisics' })

console.log('teach :>> ', teach);
console.log('Teacher.prototype :>> ', Teacher.prototype);



Teacher.prototype.greeting = function () {
  console.log("I am teacher method");
};

console.log(teach.greeting());


// 4) Создать конструктор Student который наследует свойства Person и изменяет метод greeting

const Student = function (config) {
  const { subject } = config;
  Person.call(this, config);
  this.subject = subject;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

  const student = new Student({ firstName: 'Avocado', lastName: 'Dou', age: 20, gender: 'female', interest: 'fashion', subject: 'Lawyer' })

console.log(student.greeting())



// 5) Напиши конструктор Notes который управляет коллекцией заметок в свойстве items.
// Заметка это объект со свойствами text и priority.
// Добавь конструктору статическое свойство Priority, в котором будет храниться объект с приоритетами.
const priority = {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high'
}

const Notes = function (items) {
  this.items = items; 
}

Notes.prototype.addNote = function ({ text, priority }) {
  const id = text.length;
  this.items.push({ text, priority, id });
}

Notes.prototype.removeNote = function (text) {
  for (let i = 0; i < this.items.length; i += 1) {
    let item = this.items[i];
    if (item.text === text) {
      this.items.splice(this.items.indexOf(item), 1)
    }
  }
}

Notes.prototype.updateNote = function (text, priority) {
  for (let i = 0; i < this.items.length; i += 1) {
    let item = this.items[i];
    if (item.text === text) {
      item.priority = priority;
    } 
  }
}

const myNotes = new Notes([]);

myNotes.addNote({ text: 'my first note', priority:  'low'});

console.log('myNotes :>> ', myNotes);

myNotes.addNote({  text: 'Моя первая заметка', priority: 'low' }) 
console.log(myNotes.items);

myNotes.addNote({ text: 'Моя вторая заметка', priority: 'normal' })  
console.log(myNotes.items);

myNotes.removeNote('Моя первая заметка');
console.log(myNotes.items);

myNotes.updateNote('Моя вторая заметка', 'high'); //Notes.Priority.HIGH
console.log(myNotes.items);

// function Human(firstName, lastName) {
// 	this.firstName = firstName,
// 	this.lastName = lastName,
// 	this.fullName = function() {
// 		return this.firstName + " " + this.lastName;
// 	}
// }

// var person1 = new Human("Virat", "Kohli");

// console.log(person1)
// var person1 = new Human("Virat", "Kohli");
// var person2 = new Human("Sachin", "Tendulkar");