/*
Завдання 1(task1.js)
Є масив чисел 

const numbers = [5, -4, 0, 6, 7, -1, 0, 0]
Використовуючи звичайний цикл for, порахуйте кількість позитивних та негативних чисел та нулів. Приклад результату:

Positive numbers:3
Negative numbers:2
Zeros:3
*/
const numbers = [5, -4, 0, -6, 7, 1, 0, 0, 0, 125, 45, 47, -58, 0, -784]
let countPositiveNumbers = 0
let countNegativeNumbers = 0
let countZeros = 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        countPositiveNumbers++
    } else if (numbers[i] < 0) {
        countNegativeNumbers++
    } else {
        countZeros++
    }
}
console.log(`Count of positive numbers: ${countPositiveNumbers},\ncount of negative numbers: ${countNegativeNumbers},\ncout of zeros: ${countZeros}`)