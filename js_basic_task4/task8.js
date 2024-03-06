/*
Завдання 8(task8.js) - додаткове, необов'язкове:

Given an array/list[] of integers. Find the product of the k maximal  numbers.

Notes:
Array/list size is at lease 3
Array/list's numbers will be mixture of positive, negative and zeros
Repetition of numbers  in the array/list could occur

Input >> Output Examples
maxProduct ({4,3,5},2) ==> return (20)
Explanation:
Since the size (k) equal 2, then the subsequence of size 2  whose gives product of maxima is 5*4 = 20

maxProduct ({8,10,9,7},3) ==> return (720)
Explanation:
Since the size (k) equal 3, then the subsequence of size 3  whose gives product of maxima is 10*9*8 = 720

maxProduct ({10,8,3,2,1,4,10},5) ==> return (960)
Explanation:
Since the size (k) equal 5, then the subsequence of size 5  whose gives product of maxima is 10*10*8*4*3 = 9600

maxProduct ({-4,-27,-15,-6,-1},2) ==> return (4)
Explanation:
Since the size (k) equal 2, then the subsequence of size 2  whose gives product of maxima is -1*-4 = 4

maxProduct ({10,3,-1,-27},3) ==> return (-30)
Explanation:
Since the size (k) equal 3, then the subsequence of size 3  whose gives product of maxima is 10*3*-1 = -30
*/
let k = 5                                   // count of maximal  numbers
let list = [10,8,3,2,1,4,10]                  // given array/list
let maxProduct

list.sort(function (a, b) { return b - a })  //sort by desc
maxProduct = list.slice(0, k)               //array/list of k max numbers from input array/list

let result = 1                           //the product of the k maximal  numbers.

for (let product of maxProduct) {
    result *= product
}
console.log(`The product of the ${k} maximal  numbers is : ${result}`)
