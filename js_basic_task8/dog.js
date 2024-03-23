 import Animal from "./animal.js"

//Створити дочірній клас Dog від Animal та в ньому додати 3 індивідуальні властивості для собак. І 2 індивідуальні методи.

export default class Dog extends Animal {
    constructor(name, color, type, coatLength, countBall, isSterilized) {
        super(name, color, type,)
        this.coatLength = coatLength
        this.countBall = countBall
        this.isSterilized = isSterilized
    }

    catchBall(count) {
        this.countBall += count
        console.log(`All ${this.countBall} balls were caught by ${this.name}`)
    }

    hasOffspring() {
        if (this.isSterilized) {
            return `the dog can't has the offspring. He is sterilized.`
        } else {
            return `the dog can has the offspring`
        }
    }

    printDogInfo(){
        return `The dog name is: ${this.name}, color: ${this.color}, type: ${this.type}, coat length: ${this.coatLength}, caught ${this.countBall}, is sterilized: ${this.isSterilized}`
    }

}
