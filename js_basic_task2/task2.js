/*
Завдання 2(task2.js):
Напишіть програму для визначення вартості автомобіля в автоцентрі в залежності від його характеристик. 
Базова вартість автомобілю - 10.000, всі додаткові надбавки потрібно додати до базової вартості.

Якщо рік випуску автомобіля від 2019 до 2022 (включно), вартість збільшується на 10%.
Якщо автомобіль з пробігом, пробіг від 50 000 км до 100 000 км (включно), вартість зменшується на 5%.
Якщо автомобіль має клімат-контроль, вартість збільшується на 7%.
Якщо користувач обирає автомобіль з додатковим пакетом безпеки, вартість збільшується на 8%.
Якщо автомобіль є електричним, вартість збільшується на 15%.
Вивести в консоль: базову та фінальну ціну автомобіля. За бажанням можна вивести додаткову інформацію, чому ціна збільшилась. Наприклад :

"Base price was 10. 000, hasClimateControl added +700 to the final price" і так далі.
*/
import chalk from "chalk"

let basePrice = 10000
let manufactureYear = 2018
let carMileage = 100001
let hasClimateControl = false
let isAdditionalSavePackage = true
let isElectric = false

let price = basePrice
let message = ""
let tax = 0
let totalChanges
if (manufactureYear > 2019 && manufactureYear <= 2022) {
    tax = 0.1
    totalChanges = basePrice * tax
    message = `\nManufacture year is : ${manufactureYear}, added ${totalChanges.toFixed(2)}$. `
}

if (carMileage > 50000 && carMileage <= 100000) {
    totalChanges = basePrice * 0.05
    message += `\nCar mileage is : ${carMileage}, subtracted ${totalChanges.toFixed(2)}$.`
    tax -= 0.05
}

if (hasClimateControl) {
    totalChanges = basePrice * 0.07
    message += `\nCar has climate control, added ${totalChanges.toFixed(2)}$.`
    tax += 0.07
}
if (isAdditionalSavePackage) {
    totalChanges = basePrice * 0.08
    message += `\nAdditional save package is selected, added ${totalChanges.toFixed(2)}$.`
    tax += 0.08
}

if (isElectric) {
    totalChanges = basePrice * 0.15
    message += `\nCar is electric, added ${totalChanges.toFixed(2)}$.`
    tax += 0.15
}
price *= (1 + tax)
console.log(chalk.red(`Base price was ${basePrice}$.`) + `${chalk.grey(message)} ` + chalk.green(`\nLast price is : ${price}$.`))


