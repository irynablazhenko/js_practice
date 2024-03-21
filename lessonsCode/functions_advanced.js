// const hof = (callback) => {
//     console.log("inside HOF")
//     callback();
// }

// const sayHi = () => {
//     console.log("Hi");
// }

// const sayBye = () => {
//     console.log("Bye");
// }




// hof(sayHi);
// hof(sayBye);

// const hof = (callback, message) => {
//     callback(message);
//     console.log("inside HOF");

// }

// const saySomething = (message) => {
//     console.log("inside callback");
//     console.log(message);
// }

// hof(saySomething, "Test message");


// function processPayment(onSuccessCb, onFailureCb, paymentId) {
//     const isPaymentSuccess = true;

//     if (isPaymentSuccess) {
//         onSuccessCb(paymentId);
//     } else {
//         onFailureCb(paymentId);
//     }

// }


// function onPaymentSuccess(paymentId) {
//     console.log(`Payment ${paymentId} is successful`);
// }

// function onPaymentFailed(paymentId) {
//     console.log(`Payment ${paymentId} is failed`);
// }
// let id = String(Math.random()).slice(2, 9);

// processPayment(onPaymentSuccess, onPaymentFailed, id);

//Global this context
//console.log(this);

//Object context

// const person = {
//     name: "Alice",
//     age: 29,
//     greet: function () {
//         console.log(`Hello, ${this.name}`);
//     }
// }
// person.person();

// const person = {
//     name: "Alice",
//     age: 29,
//     greetParent: function () {
//         let greet = () => {
//             console.log(`Hello, ${this.name}`);
//         }
//         greet();
//     }
// }
// person.greetParent();

// call
// function greet(message, userName) {
//     console.log(`${message}, ${this.name} ${this.lastName}. My name is ${userName}`);
// }

// const person1 = {
//     name: "Mike",
//     lastName: "Smith"
// };
// const person2 = {
//     name: "Alex",
//     lastName: "Adams"
// };

// greet();

// greet.call(person1, "Hello friend", "Mykhailo");

// greet.call(person2, "Hi folk", "Hanna");


//apply
// function greet(message, userName) {
//     console.log(`${message}, ${this.name} ${this.lastName}. My name is ${userName}`);
// }

// const person1 = {
//     name: "Mike",
//     lastName: "Smith"
// };
// const person2 = {
//     name: "Alex",
//     lastName: "Adams"
// };

// const argsArray = ["Hi", "Ihor"];
// greet.apply(person1, argsArray);

// greet.apply(person2, ["Hello", "Yevhen"]);


//bind

// function greet(message) {
//     console.log(`${message} ${this.name} ${this.lastName}`);
// }

// const person1 = {
//     name: "Mike",
//     lastName: "Smith"
// };
// const person2 = {
//     name: "Alex",
//     lastName: "Adams"
// };

// const greetPerson1 = greet.bind(person1);
// const greetPerson2 = greet.bind(person2, "Hi");

// greetPerson1();
// greetPerson2();

//Function constructor
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.printData = function () {
//         console.log(`${this.title} was written by ${this.author} in ${this.year}`);
//     }
// }
// const book1 = new Book('Book One', 'John Doe', '2013');
// const book2 = new Book('Book Two', 'Alison', '2016');

// console.log(book1);
// book1.printData();
// book2.printData();

// IIFE
// (function sayHello(name) {
//     console.log("Hello " + name);
// })("Peter");

// Closure

// function counter() {
//     let count = 1;

//     return function () {
//         return count++;
//     }
// }


// const counter1 = counter();
// const counter2 = counter();

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log("-------------");
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());


// function counterRegular() {
//     let count = 1;
//     return count++;
// }

// console.log(counterRegular());
// console.log(counterRegular());
// console.log(counterRegular());
// console.log(counterRegular());




// function multiplier(factor) {

//     return function (number) {
//         return number * factor;
//     }
// }

// const double = multiplier(2);
// const triple = multiplier(3);


// console.log(double(10));
// console.log(triple(10));


// console.log(multiplier(5)(10));




// function countToTen(startValue) {
//     for (let i = startValue; i <= 10; i++) {
//         console.log(i);
//     }
// }

//countToTen(5);


// function countToTenRecursion(startValue) {

//     if (startValue <= 10) {
//         console.log(startValue);
//         startValue++;
//         countToTenRecursion(startValue);     
//     }
// }

// countToTenRecursion(5);


// function traverse(node) {
//     console.log(node.value);
//     node.children.forEach(child => {
//         traverse(child); // Рекурсивний виклик для кожного дочірнього вузла
//     });
// }


// const tree = {
//     value: 1,
//     children: [
//         {
//             value: 2,
//             children: []
//         },
//         {
//             value: 3,
//             children: [
//                 {
//                     value: 4,
//                     children: []
//                 },
//                 {
//                     value: 5,
//                     children: []
//                 }
//             ]
//         }
//     ]
// };

// traverse(tree);


// function outerFunction() {
//     const outerMessage = "Outer message";

//     console.log(innerMessage);
//     function innerFunction() {
//         console.log(outerMessage);
//     }

//     innerFunction();
// }

// outerFunction();

// Створити фукнцію, яка приймає масив та call-back функцію, яка буде визначати, які елементи масиву потрібно залишити. Вивести відфільтрований масив
// function filterArray(arr, filterCallback) {
//     return arr.filter(filterCallback);
// }
// function isEven(num) {
//     return num % 2 === 0;
// }
// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(filterArray(numbers, isEven));


// function outerFunction(args) {
//     return function () {
//         console.log("Inside callback");
//         return args;
//     }
// }


// let helloMessage = outerFunction("hello");

// console.log(helloMessage());

// let array = outerFunction([1, 23, 5, 6, 7]);
// console.log(array());

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// console.log(factorial(5))