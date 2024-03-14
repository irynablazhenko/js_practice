/*Завдання 2(task2.js)
Напишіть функцію, яка приймає масив чисел в якості аргументу і повертає новий масив, в якому кожен елемент буде піднесений до квадрата.
*/
const numbersToSquare = function (array) {
    return array.map(arr => arr * arr)
}
const userArray = [4, 7, 58, 6, 64, 72, 5, 11]
console.log(`Масив ${userArray} після піднесення до квадрату : ${numbersToSquare(userArray)}`)