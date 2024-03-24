import Animal from './animal.js'
//Створити дочірній клас Cat від Animal та в ньому додати 3 індивідуальні властивості для котів. І 2 індивідуальні методи.

export default class Cat extends Animal {
    constructor(name, color, type, breed, yearsOld, catchMice) {
        super(name, color, type,)
        this.breed = breed
        this.yearsOld = yearsOld
        this.catchMice = catchMice
    }

    increaseAge(years) {
        this.yearsOld += years
        console.log(`Cat ${this.name} is ${this.yearsOld} years old`)
    }

    catchMouse() {
        if (this.catchMice) {
            return `yes, it does`
        } else {
            return `no, it doesn't`
        }
    }

    printCatInfo() {
        return `The cat name is: ${this.name}, color: ${this.color}, type: ${this.type}, breed: ${this.breed}, ${this.yearsOld} years old, does it catch the mice: ${this.catchMouse()}`
    }
}