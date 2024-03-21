// const person1 = new Object();
// console.log(person1);
// person1.name = "David";
// person1.age = 30;
// console.log(person1);

// function MyObject(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const person2 = new MyObject("John", 55);

// console.log(person2);

// const person3 = {
//     name: "Mike",
//     age: 50
// }
// console.log(person3.name);
// console.log(person3.age);


// person3.name = "Dan";
// console.log(person3);
// person3.address = "Ukraine";
// console.log(person3);

// delete person3.name;

// console.log(person3);

// const person = {
//     name: "Mike",
//     age: 50,
//     sayHello: function () {
//         console.log(`My name is ${this.name}`)
//     },
//     sayGoodBye: (anotherName) => {
//         console.log(`Bye, ${anotherName}`);
//     },
//     sayInfo() {
//        return(`My name is ${this.name}, and I am ${this.age} years old`);
//     }
// }

// person.sayHello();
// person.sayGoodBye("Pavel");
// person.sayInfo();
// console.log(person.sayInfo());


// const name = "Peter";
// const age = 66;


// const user = {
//     name,
//     age,
// }

// console.log(user);

// const person = {
//     name: "Peter",
//     age: 18,
//     address: {
//         street: "Main Str",
//         house: 23,
//         phones: {
//             mobile: "111-11-11",
//             home: "222-22-22"
//         }
//     }
// }

// console.log(person);
// console.log("==============");
// console.log(person.address);
// console.log("==============");
// console.log(person.address.phones);
// console.log("==============");
// console.log(person.address.phones.mobile);

// let propertyName = "age";

// const person = {
//     name: "Peter",
//     age: 18,
// }


// console.log(person[propertyName]);

// const person = {
//     "user-name": "Peter",
//     "user age": 18,
// }

// console.log(person["user name"]);


// const user = {
//     name : "max",
//     address: null
// }

// console.log(user.address?.street);


// const user = {
//     name: "max",
//     age: 55,
//     city: "New York",
//     country: "USA",
//     greet() {
//         console.log("Hi");
//     }
// }

// for (let key in user) {
//     console.log(`${typeof user[key]}`);
//   //  console.log(`key: ${key}, value: ${user[key]}`);
// }

// const user = {
//     name: "max",
//     age: undefined,
//     city: "New York",
//     country: "USA",
// }

// console.log(user.hasOwnProperty("age"));

//Object.create();


// let animalPrototype = {
//     type: "animal",
//     greet: function () {
//         console.log(`My name is ${this.name}`)
//     }
// }

// let animalCat = Object.create(animalPrototype);
// animalCat.name = "Cat Meow";
// animalCat.greet();



// console.log(animalCat);
// console.log(animalCat.type);
// animalCat.greet();


// let animalDog = Object.create(animalPrototype);
// animalDog.name = "Dog dog";

// console.log(animalDog);
// console.log(animalDog.type);
// animalDog.greet();


// console.log(animalCat)

// for (value in animalCat) {
//     console.log(value);
// }


// __proto__
// let animalPrototype = {
//     type: "animal",
//     greet: function () {
//         console.log(`My name is ${this.name}`)
//     }
// }

// let animalCat = Object.create(animalPrototype);
// animalCat.name = "Cat Meow";
// console.log(animalCat.__proto__.type);

// let animalWolf = {
//     name: "wolf wolf",
//     __proto__: animalPrototype
// }

// animalWolf.greet();

// Object.keys, values, entries
// const person = {
//     name: "Person person",
//     age: 77,
//     phone: "44-444-44"
// }

// console.log(Object.keys(person));
// console.log(Object.values(person));


// Object.keys(person).forEach(key => console.log(`key is ${key}, value is ${person[key]}`));
// console.log(Object.entries(person)[0][1]);



// Масив об'єктів

// const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 55 },
//     { name: "Charlie", age: 11 },
// ]

// const person1 = {
//     name: "Max",
//     age: 55
// }
// people.push({ name: "David", age: 55 });
// people.push(person1);


// console.log(people);


// Деструктурізація
// const user = {
//     name: "John",
//     age: 30,
//     email: "test@gmail.com",
//     country: "Canada",
// }

// const name = user.name;
// const age = user.age;
// const email = user.email;
// const country = user.country;
// =
// const { name: userName, age: userAge, email, country, city = "Ottawa" } = user;

// console.log(userName);
// console.log(userAge);
// console.log(email);
// console.log(country);
// console.log(city);

// console.log(user);

// function printData({ userName, userAge, userCity }) {
//     console.log(`Name: ${userName}, age: ${userAge}, city: ${userCity}`);
// }

// const paramsObj = {
//     userName: "Alex",
//     userCity: "Lviv",
//     userAge: 55
// };

// printData(paramsObj);


// const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 55 },
//     { name: "Charlie", age: 11 }
// ]


// for ({ name, age } of people) {
//     console.log(name);
//     console.log(age);
// }

// Деструктуризація масивів

// Копіювання

// const person1 = {
//     name: "Ihor",
//     age: 44,
//     address: {
//         street: "Main st",
//         phone: "232424"
//     }
// }

// const person2 = { ...person1 };

// person2.address.street = "Max";
// console.log(person1);

// console.log(person2);

// const person1 = {
//     name: "Ihor",
//     age: 44,
//     address: {
//         street: "Main st",
//         phone: "232424"
//     }
// }

// const person2 = structuredClone(person1);

// person2.address.street = "Max";
// console.log(person1);

// console.log(person2);

//Object.freeze


// const person1 = {
//     name: "Ihor",
//     age: 44,
//     address: {
//         street: "Main st",
//         phone: "232424"
//     }
// }


// Object.freeze(person1);

// person1.name = "New name";

// console.log(person1);

// Map

// let myMap = new Map();

// myMap.set("key1", "value1");
// myMap.set("key2", "value2");
// myMap.set("key3", "value3");
// myMap.set("key3", "value4");
// console.log(myMap);

// console.log(myMap.get("key1"));


// console.log(myMap.has("key2"));
// console.log(myMap.has("key5"));

// myMap.delete("key2");

// console.log(myMap);

// myMap.clear();

// console.log(myMap.size);

// Створити об'єкт shop, який буде містити:
// масив товарів,
// методи: addItem, printItem, printItems
// itemName, itemPrice, itemId


// const shop = {
//     itemsList: [],
//     addItem(itemName, itemPrice, itemId) {
//         if (this.itemsList.some(item => item.itemId === itemId)) {
//             console.log("Error, ID is wrong");
//         } else {
//             this.itemsList.push({ itemName, itemPrice, itemId })
//         }
//     },
//     printItem(itemId) {
//         console.log(`Product with id ${itemId}`);
//         console.log(this.itemsList.filter(item => item.itemId === itemId))
//     },
//     printAllItems() {
//         console.log(`All products:`);
//         console.log(this.itemsList);
//     }
// }

// shop.addItem("Banana", 600, 1);
// shop.addItem("Apple", 300, 2);
// shop.addItem("Peach", 700, 2);

// console.log(shop.itemsList);
// shop.printItem(1);
// shop.printAllItems();