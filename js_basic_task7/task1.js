/*
Завдання 1(task1.js)
Створити 3 об'єкти через {}, кожен об'єкт повинен мати як мінімум 3 властивості і 2 методи.

Приклади об'єктів: person, car, book, phone, city, building etc...
*/
const book = {
    title: "Мистецтво",
    author: "О. Г. Авксентьева, І. Д. Авдеева.",
    year: 1973,
    getInfo: function () {
        return `\tBook title: ${this.title}\n\tAuthor: ${this.author}\n\tRelease year: ${this.year}`
    },
    changeReleaseYear: function (newYear) {
        this.year = newYear
    },
}
console.log(`The initial information:\n${book.getInfo()}`)
book.changeReleaseYear(1985)
console.log(`Last information:\n${book.getInfo()}`)

const city = {
    name: "Kyiv",
    population: 2938676,
    foundationYear: 482,
    area: 835.58,
    densityOfPopulation: 3516.92,
    getInfo: function () {
        return `\tCity: ${this.name}\n\tpopulation: ${this.population} people\n\tYear of foundation: ${this.foundationYear}\n\tArea: ${this.area} km2\n\tDensity of population: ${this.densityOfPopulation} people/km2`
    },
    setPopulation: function (newPopulation) {
        this.population = newPopulation
        console.log(`The new population is: ${this.population} people`)
    },
    setNewArea: function (newArea) {
        this.area = newArea
        console.log(`The new area is: ${this.area} km2`)
    },
    calculateDensityOfPopulation: function () {
        this.densityOfPopulation = Math.round((this.population / this.area) * 100) / 100
    },

}
console.log(`\nThe initial city information:\n${city.getInfo()}`)
city.setPopulation(3038676.26)
city.setNewArea(935.2)
city.calculateDensityOfPopulation()
console.log(`Information after all changes:\n${city.getInfo()}`)

const car = {
    brand: "Chevrolet",
    model: "Lacetti",
    year: 2007,
    mileage: 150000,
    price: 4500,
    getInfo: function () {
        return `\tCar brand: ${this.brand}\n\tModel: ${this.model}\n\tYear: ${this.year}\n\tMileage: ${this.mileage} km\n\tPrice: ${this.price} $`
    },
    changePrice: function (newPrice) {
        this.price = newPrice
    },
}
console.log(`\nThe initial information:\n${car.getInfo()}`)
car.changePrice(4300)
console.log(`Last information:\n${car.getInfo()}`)