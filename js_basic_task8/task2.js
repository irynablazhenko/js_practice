/*
Завдання 2(task2.js)* - додаткове, необов'язкове
Зробіть дочірній клас від Dog для конкретної породи собаки. Додайте індивідуальну властивість для породи. 
Наприклад, клас Вівчарка(Shepherd) та властивість улюблена їжа (Favorite Food)

2.Створити об'єкти до нового класу і попрактикуватись із індивідуальними методами/властивостями та наслідуваними від Dog та Animal.
*/
import Shepherd from './shepherd.js'

const shepherd1 = new Shepherd('Rex', 'black and grey', 'shepherd', 'long', 50, true, 'meat')
console.log(shepherd1.printDogInfo())

shepherd1.catchBall(25)
shepherd1.coatLength = 'short'

console.log(`Can the dog ${shepherd1.name} has an offspring? ${shepherd1.hasOffspring()}`)
shepherd1.sayHello()
shepherd1.run()
shepherd1.color = 'black'
shepherd1.type = 'amstaf'
console.log(shepherd1.printDogInfo())
console.log(shepherd1.printShepherdInfo())