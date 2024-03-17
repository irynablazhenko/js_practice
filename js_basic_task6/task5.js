/*
Your task is to write a function which return a sequence of integers.
The sequence is defined by non-negative values: begin, end, step.
If begin value is greater than the end, your function should return 0. If end is not the result of integer number of steps. then don't add it to the sum. 
Examples:
2,2,2 --> 2
2,6,2 --> 12 (2+4+6)
1,5,1 --> 15 (1+2+3+4+5)
1,5,3 --> 5 (1+4)
*/

function calculateSumOfSequence(begin, end, step) {
    let sum = 0
    if (begin < 0 || end < 1 || step < 0) {
        throw new Error(`At least one argument is negative or equal 0`)
    } else {
        if (begin > end) {
            return 0
        } else if (begin <= end || end - begin < step) {
            sum = sum + begin
            return calculateSumOfSequence(begin + step, end, step) + sum
        } else return sum
    }
}

try {
    console.log(calculateSumOfSequence(1, 25, 5))
} catch (error) {
    console.log(`Error happen: ${error.message}`)
}
