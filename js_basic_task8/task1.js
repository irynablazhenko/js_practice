/*
Завдання 1(task1.js)
По можливості кожен клас створювати в окремому файлі, і створити окремий клас для створення всіх об'єктів та роботи з ними. 

Створити клас Animal. Додати до нього властивості color, name, type. Та методи sayHello та run. Реалізацію методів зробіть будь яку, але логічну.
Створити дочірній клас Dog від Animal та в ньому додати 3 індивідуальні властивості для собак. І 2 індивідуальні методи.
Створити дочірній клас Cat від Animal та в ньому додати 3 індивідуальні властивості для котів. І 2 індивідуальні методи.
Створити об'єкти до Dog та Cat та попрактикуватись із методами.
*/
import Dog from "./dog.js"
import Cat from "./cat.js"

const dog1 = new Dog('Keyko', 'pink', 'pikiness', 'long', 18, true)
const dog2 = new Dog('Snow', 'white', 'rotveller', 'long', 2, false)

console.log(dog1.printDogInfo())

dog1.catchBall(25)
dog1.coatLength = 'short'

console.log(`Can the dog ${dog1.name} has an offspring? ${dog1.hasOffspring()}`)
console.log(`Can the dog ${dog2.name} has an offspring? ${dog2.hasOffspring()}`)
dog1.sayHello()
dog1.run()
dog1.color = 'black'
dog2.sayHello()
dog2.run()
dog2.type = 'amstaf'
console.log(dog1.printDogInfo())
console.log(dog2.printDogInfo())

console.log(`---------------------------------------------------------------------------`)

const cat1 = new Cat('May', 'grey', 'domestic', 'Balinese', 2, false)
const cat2 = new Cat('Tom', 'red', 'wild', 'Laperm', 6, false)

console.log(cat1.printCatInfo())
console.log(cat2.printCatInfo())

cat1.increaseAge(3)
cat2.increaseAge(5)
cat1.catchMice = 'true'
console.log(cat1.printCatInfo())
console.log(cat2.printCatInfo())