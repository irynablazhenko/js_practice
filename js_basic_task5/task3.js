/*
Завдання 3(task3.js)
Напишіть функцію, яка приймає масив чисел в якості аргументу і повертає суму всіх чисел у масиві.
*/
function sum(array) {
    if (!Array.isArray(array)) {
        console.log('This is not array ')
    }
    if (array.length < 1) {         //no need to check is the array empty
        console.log('Array is empty')
    }
    if (array.includes(NaN)) {
        console.log('The array contains "NaN" and the "NaN" will be stripped')
    }
    if (array.includes(null)) {
        console.log('The array contains "null" and the "null" be stripped')
    }
    if (array.length >= 1) {
        let sum = 0        
        for (let number of array) {
            if (typeof number === 'number' && !isNaN(number)) {
                //numberArray.push(array[i])
                sum += number
            }
        }
        return sum
    }
}
let array = [1, "string", NaN, 5, null, 54, -58, 0, 54]
console.log(`${sum(array)}`)