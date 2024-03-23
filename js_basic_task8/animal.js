//Створити клас Animal. Додати до нього властивості color, name, type. Та методи sayHello та run. Реалізацію методів зробіть будь яку, але логічну.
export default class Animal {
    constructor(name,color, type) {
        this.color = color
        this.type = type
        this.name = name        
    }

    sayHello() {
        return `Hello, my name is ${this.name}`
    }

    run() {
        return `I am running`
    }
}

