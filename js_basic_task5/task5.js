/*
Завдання 5(task5.js) - додаткове, необов'язкове:

In this kata you will create a function that takes a list of non-negative integers and returns a new list with the strings filtered out.

filteredList ([1,2,'a','b']) = [1,2]
filteredList ([1,2,'a','b',0,15]) = [1,2,0,15]
filteredList ([1,2,'a','123',125]) = [1,2,125]
*/
function createNumericArray(array) {
    if (array.length < 1) {         //no need to check is the array empty
        return 'Array is empty'

    } else {
        let numericArray = []
        for (let number of array) {
            if (typeof number === 'number' && !isNaN(number) && number >= 0) {
                numericArray.push(number)
            }
        }
        return numericArray
    }
}
let array = [1,2,'a','123',125]
console.log(`Filtered numerical array is : [${createNumericArray(array)}]`)


