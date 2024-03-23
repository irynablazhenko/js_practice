 import Animal from "./animal.js"

//Створити дочірній клас Dog від Animal та в ньому додати 3 індивідуальні властивості для собак. І 2 індивідуальні методи.

export default class Dog extends Animal {
    constructor(name, color, type,countBall, isSterilized) {
        super(name)
        this.color=color
        this.type = type
        this.countBall = countBall
        this.isSterilized = isSterilized
    }

    catchBall(count) {
        this.countBall += count
        console.log(`All ${this.countBall} balls were caught`)
    }

    hasOffspring() {
        if (this.isSterilized) {
            return `the dog can't has the offspring`
        } else {
            return `the dog can has the offspring`
        }
    }

    printDogInfo(){
        return `The dog name is: ${this.name}${this.__prototype__.name}, color: ${this.color}, type: ${this.type}, caught ${this.countBall}, is sterilized: ${this.isSterilized}`
    }

}
