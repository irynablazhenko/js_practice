/*
Завдання 3(task3.js):
Створіть програму, яка приймає дві змінних і виводить список парних чисел, які знаходяться між ними.

Підказка для імплементації: Спочатку треба вирахувати, яке з двох чисел більше, а яке менше, 
щоб встановити межи циклу. Для цього можна використовувати Math.min(number1, number2) та Math.max(number1,number2)
*/
let firstNumber = 21
let secondNumber = -46
let list =[]

let min = Math.min(firstNumber,secondNumber)
let max = Math.max(firstNumber,secondNumber)

for (let i=min+1; i<max; i++) {
    if (!(i%2)){
        list.push(i)
    }
}
console.log(list)