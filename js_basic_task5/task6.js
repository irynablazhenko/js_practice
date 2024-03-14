/*
Завдання 6(task6.js) - додаткове, необов'язкове:
A non-empty array a of length n is called an array of all possibilities if it contains all numbers between 0 and a.length -1 (both inclusive).
Write a function that accepts an integer array and returns true if the array of all possibilities, else false.

Examples:
[1,2,0,3] => true - includes all numbers between 0 and a.length-1 (between 0-3)
[0,1,2,2,3] => false - doesn't include all numbers between 0 and a.length-1 (between 0-5). 4 and 5  are missed.
[0] => false - doesn't include all numbers between 0 and a.length-1 (between 0-0).
*/
function isArrayOfAllPossibilities(a){
    if (a.length > 0 && a.every((number,index) => a.includes(index))){
            return true
        } else {
            return false
        }
}
let a = [0,1,2,2,3]
console.log(isArrayOfAllPossibilities(a))
