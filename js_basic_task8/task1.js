/*
Завдання 1(task1.js)
По можливості кожен клас створювати в окремому файлі, і створити окремий клас для створення всіх об'єктів та роботи з ними. 

Створити клас Animal. Додати до нього властивості color, name, type. Та методи sayHello та run. Реалізацію методів зробіть будь яку, але логічну.
Створити дочірній клас Dog від Animal та в ньому додати 3 індивідуальні властивості для собак. І 2 індивідуальні методи.
Створити дочірній клас Cat від Animal та в ньому додати 3 індивідуальні властивості для котів. І 2 індивідуальні методи.
Створити об'єкти до Dog та Cat та попрактикуватись із методами.
*/
import Dog from "./dog.js"
//import Animal from "./animal.js"

const dog1 = new Dog('Dog`s name','color','type', 5, true)
const dog2 = new Dog( 'Keyko','pink','type2',18, false)
const dog3 = new Dog('Snow','white','type3',2, false)

console.log(dog2.printDogInfo())
