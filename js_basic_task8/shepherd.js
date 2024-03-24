import Dog from './dog.js'
/*Зробіть дочірній клас від Dog для конкретної породи собаки. Додайте індивідуальну властивість для породи. 
Наприклад, клас Вівчарка(Shepherd) та властивість улюблена їжа (Favorite Food)*/

export default class Shepherd extends Dog {
    constructor(name, color, type, coatLength, countBall, isSterilized, favoriteFood) {
        super(name, color, type, coatLength, countBall, isSterilized)
        this.favoriteFood = favoriteFood
    }
    printShepherdInfo() {
        return `The dog name is: ${this.name}, color: ${this.color}, type: ${this.type}, coat length: ${this.coatLength}, caught ${this.countBall}, is sterilized: ${this.isSterilized}, favorite food is: ${this.favoriteFood}`
    }
}