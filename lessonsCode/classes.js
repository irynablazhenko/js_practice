// import Calculator from "./static.js";

// class Car {
//     constructor(brand, speed, litersInside) {
//         this.brand = brand;
//         this.speed = speed;
//         this.liters = litersInside;
//     }
//     turnOn() {
//         console.log(`Car ${this.brand} is turned on. Max speed is ${this.speed}`);
//     }

//     turnOff() {
//         console.log(`Car ${this.brand} is turned off`);
//     }

//     fillPetrol(liters) {
//         console.log(`${liters} liters of petrol filled`);
//         this.liters += liters;
//         console.log(`Now there are ${this.liters} liters in the car`);
//     }

// }

// const car1 = new Car("BMW", 150, 30);
// const car2 = new Car("Audi", 200, 50);

// car1.turnOn();
// car1.turnOff();
// car1.fillPetrol(100);

// console.log("----------------");
// car2.turnOn();
// car2.turnOff();
// car2.fillPetrol(50);


// Модифікатори доступу


// class Car {

//     #number;
//     constructor(brand, speed, litersInside, number) {
//         this.brand = brand;
//         this.speed = speed;
//         this.liters = litersInside;
//         this.#number = number;
//     }

//     #printNumber() {
//         console.log(this.#number);
//     }

//     turnOn() {
//         console.log(`Car ${this.brand} is turned on. Max speed is ${this.speed}`);
//     }

//     turnOff() {
//         console.log(`Car ${this.brand} is turned off`);
//     }

//     fillPetrol(liters) {
//         console.log(`${liters} liters of petrol filled`);
//         this.liters += liters;
//         console.log(`Now there are ${this.liters} liters in the car`);
//     }

// }

// const car1 = new Car("BMW", 150, 30, "12345");

// car1.#printNumber(); // error message


// Getters and Setters

class Car {

    #number;
    constructor(brand, speed, litersInside, number) {
        this.brand = brand;
        this.speed = speed;
        this.liters = litersInside;
        this.#number = number;
    }

    set number(carNumber) {
        if (carNumber.length < 4) {
            console.log("The number is wrong");
        } else {
            this.#number = carNumber;
        }
    }

    get number() {

        return `Car's number is ${this.#number}`;
    }


    printNumber() {
        console.log(this.#number);
    }

    turnOn() {
        console.log(`Car ${this.brand} is turned on. Max speed is ${this.speed}`);
    }

    turnOff() {
        console.log(`Car ${this.brand} is turned off`);
    }

    fillPetrol(liters) {
        console.log(`${liters} liters of petrol filled`);
        this.liters += liters;
        console.log(`Now there are ${this.liters} liters in the car`);
    }

}

const car1 = new Car("BMW", 150, 30, "12345");
// car1.printNumber();
// car1.number = "26666662";
// car1.printNumber();

console.log(car1.number);