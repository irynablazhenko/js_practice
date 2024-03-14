/*
Завдання 4(task4.js)
Напишіть функцію, яка приймає 3 параметри-оцінки: математика, література, фізика. Кожен від 1 до 100.

В функції порахуйте середній бал і поверніть(return) наступний рядок в залежності від середнього балу:

1-49 - Low performance
50-69 - Medium performance
70-89 - Good performance
90-100 - Very good performance
*/
function avgPoint(math = 100, lit = 100, phy = 100) {
    let args = [math, lit, phy]
    let points = []
    if (args.length != 3) {
        return console.log(`You entered more or less arguments. Please enter 3 arguments. Your count of entered arguments are: ${arguments.length+1}`)
    } else {
        for (let number of args) {
            if (typeof number === 'number' && !isNaN(number) && number > 0 && number <= 100) {
                points.push(number)
            } else {
                return console.log(`At least one of the basic points is incorrect. Please enter a number from 1 to 100. Wrong argument is: ${number}`)
            }
        }
        let avg = Math.trunc(points.reduce((a, b) => (a + b)) / points.length) // formula for calculating the average value
        if (avg >= 1 && avg <= 49) {
            return console.log(`The average point is : ${avg} - Low performance`)
        } else if (avg >= 50 && avg <= 69) {
            return console.log(`The average point is : ${avg} - Medium performance`)
        } else if (avg >= 70 && avg <= 89) {
            return console.log(`The average point is : ${avg} - Good performance`)
        } else {
            return console.log(`The average point is : ${avg} - Very good performance`)
        }
    }
}
    avgPoint(105)

