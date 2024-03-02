/*
Завдання 3(task3.js) - додаткове, необов'язкове:
Це завдання не впливає на бал і його рекомендується виконувати для додаткової практики, якщо у вас уже є базові знання з JS

Sum all the numbers of given array (cq.list), except the highest and the lowest element (by value, not by index!)
The highest and the lowest element respectively is a single element at each edge, even if there are more than one with the same value.
Mind the input validation.

Example
{6,2,1,8,10} => 16
{1,1,11,2,3} => 6

Input validation
If an empty value (null, None, Nothing, etc) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0
*/

let array = [1, 0, NaN, 5, null, 54, -58, 0, 54]

let a = 5
if (!Array.isArray(array)) {
    console.log('This is not array ')
} else if (array.length <= 2) {         //no need to check is the array empty
    console.log('Array length is less or equal 2 elements')
}
if (array.includes(NaN)) {
    console.log('The array contains "NaN" and the "NaN" will be stripped')
}
if (array.includes(null)) {
    console.log('The array contains "null" and the NaN "null" be stripped')
}

let numberArray = []
for (let i = 0; i < array.length; i++) {
    if (Number(array[i]) || array[i] === 0) {
        numberArray.push(array[i])
    }
}

numberArray.sort((function (a, b) { return a - b }))  //0 - index is minimal value, last index - is the max value
let sum = 0
for (let i = 1; i < (numberArray.length - 1); i++) {     //only 1 min and 1 max value are excluded
    sum += numberArray[i]
}
console.log(`Sum all the numbers by the value of given array "[${array}]", except the highest and the lowest element is : ${sum}.`)

