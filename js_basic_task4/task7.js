/*
Завдання 7(task7.js) - додаткове, необов'язкове:

The museum of incredible dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. 
She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the 
lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, 
remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples

*Input: [1,2,3,4,5], output [2,3,4,5]
*Input: [5,3,2,1,4], output [5,3,2,4]
*Input: [2,2,1,2,1], output [2,2,2,1]
*/
const givenArray = [5, 3, 2, 1, 4]
if (givenArray.length > 1) {
    let indexSmallest = givenArray.findIndex(number => number == Math.min.apply(null, givenArray))  // шукає індекс найменшого числа в масиві
    const newArray = givenArray.slice(0, indexSmallest).concat(givenArray.slice(indexSmallest + 1))
    console.log(`Input : [${givenArray}], output : [${newArray}]`)
} else (
    console.log(`The Input array is empty or contains only 1 element: [${givenArray}]`)
)
