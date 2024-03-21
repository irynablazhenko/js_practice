/*
Завдання 2(task2.js)
Створити 2 об'єкти через new Object();, до кожного об'єкту додати як мінімум 3 властивості та 1 метод.

Приклади об'єктів: person, car, book, phone, city, building etc...
*/
let wearPercentage = 40 // if the phone is not new the wearPercentage > 0

const phone = new Object()
phone.brand = "Samsung"
phone.model = "S21"
phone.price = 28000
phone.wearPercentage = wearPercentage
phone.calculateActualPrice = function () {
    if (this.wearPercentage != 0) {
        this.price = this.price * (100 - this.wearPercentage) / 100
        return this.price
    } else {
        return this.price
    }
}
phone.getInfo = function () {
    if (this.wearPercentage === 0) {
        return `\tThe pone is new.\n\tPhone brand: ${this.brand}\n\tModel: ${this.model}\n\tPrice: ${this.price} UAH`
    } else {
        this.price = phone.calculateActualPrice()
        return `\tThe phone is not new.\n\tPhone brand: ${this.brand}\n\tModel: ${this.model}\n\tPrice: ${this.price} UAH\n\tWear percentage: ${this.wearPercentage} %`
    }
}

console.log(`The phone information:\n${phone.getInfo()}`)

let countOfBuiltFloors = 3

const building = new Object()
building.address = new Object()
building.address.street = "Kyivska"
building.address.house = 10
building.aptPerFloor = 6
building.getInfo = function () {
    building.calculateCountOfBuiltApartments()
    return `\tAddress: street ${building.address.street}, house ${building.address.house}\n\tApartments per floor: ${building.aptPerFloor}\n\tApartments have been built: ${this.readyApartments}`
}
building.calculateCountOfBuiltApartments = function () {
    if (countOfBuiltFloors > 0) {
        this.readyApartments = countOfBuiltFloors * this.aptPerFloor
        return this.readyApartments
    } else {
        this.readyApartments = 0
        return this.readyApartments
    }
}
console.log(`Building info: \n${building.getInfo()}`)
