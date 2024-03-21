//Function declaration


// function calculateSum(num1, num2) {
//     console.log(num1);
//     console.log(num2);
// }

// calculateSum(7, 10);


// function sayHi() {
//     console.log("Hi");
// }

// sayHi();

// function isGreaterThanTen(number) {
//     let res = number > 10;
//     return res;

// }


// let result = isGreaterThanTen(56);
// console.log(result);

//Function expression

// const greet = function (num1) {

//     console.log("Hello" + num1);
// }

// greet(5);

// foo1();

// function foo1() {
//     console.log("foo1");
// }



// foo2(); // error
// const foo2 = function () {
//     console.log("foo2");
// }

// const add = (a, b) => {

//     return a + b;
// }

// console.log(add(5, 10));

// const print = a => {

//     console.log(a);
// }

// print("Test string");

// const multiply = a => a * a;

// console.log(multiply(5));


// function add1(num1, num2) {
//     return num1 + num2;
// }
// console.log(add1(5, 10))

// const add2 = function (num1, num2) {
//     return num1 + num2;
// }
// console.log(add2(25, 20))


// const add3 = (num1, num2) => num1 + num2;
// console.log(add3(5, 51))

//task 1 - Написати функцію, яка приймає два параметри - min та max та повертає рандомне сгенероване число в заданому діапазоні
// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// console.log(getRandomNumber(1, 100));
// console.log(getRandomNumber(200, 500));

//task 2 - Реалізуйте функцію, яка приймає на вхід два масиви і повертає новий масив, що містить елементи, які є в обох масивах.


// const arrayCompare = function (arr1, arr2) {

//     return arr1.filter(value => arr2.includes(value));
// }
// console.log(arrayCompare([1, 2, 3], [2, 3, 4]));


// task 3 - Напишіть функцію, яка приймає на вхід масив чисел і повертає новий масив, що містить тільки парні числа з вихідного масиву.

// function evenNumbers(arr) {
//     return arr.filter(num => num % 2 === 0);
// }

// console.log(evenNumbers([5, 6, 7, 8, 9, 10]));

// task 4 - Створіть функцію, яка приймає на вхід два числа і повертає результат їх ділення. Передбачте обробку ситуації ділення на нуль
// const divideNumbers = (num1, num2) => {
//     if (num2 === 0) {
//         return "Error, dividing by 0";
//     } else {
//         return num1 / num2;
//     }

// }

// console.log(divideNumbers(10, 5));

// console.log(divideNumbers(10, 0));


//Global scope
// let globalVariable = "I'm global";

// function someFunction() {
//     console.log(globalVariable);
// }

// someFunction();

// //local Scope
// function someFunction() {
//     let localVariable = "I'm local"
//     console.log(localVariable);
// }
// someFunction();
// console.log(localVariable);


// function outerFunction() {

//     let outerVariable = 1;
//     console.log(innerVariable); // error
//     function innerFunction() {
//         let innerVariable = 2;
//         console.log(outerVariable)
//     }

//     innerFunction();

// }

// outerFunction();


// let variable = "Original";

// function someFoo() {
//     let variable = "Local";
//     console.log(variable);
// }
// someFoo();
// console.log(variable);

//Default params

// function greet(name = "Anonymous") {
//     console.log(`Hello, ${name}`);
// }

// greet();
// greet("Oleg");

// function sum(num1 = 5, num2 = 10) {
//     return num1 + num2;
// }


// console.log(sum(null, 200))


// rest

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0)
// }


// console.log(sum( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// spread

// const numbers = [1, 2, 3];

// const newNumbers = [...numbers, 4, 5, 6, 7, 8];

// console.log(newNumbers);

function sum(...numbers) {
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments[6]);
}


sum(1, 2, 3, 4, 5, 6, "Test string");


// Try catch

function divide(a, b) {
    if (b === 0) {
        throw new Error("Dividing by zero error");
    }

    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.log(`Error happen: ${error.message}`);
} finally {
    console.log("Finally block");
}