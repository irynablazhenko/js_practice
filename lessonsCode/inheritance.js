export class Shape {
    constructor(color) {
        this.color = color;
    }
    area() {
        // throw new Error("Area should be developed");
        return("AREA METHOD FROM SHAPE CLASS");
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

}


class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }



    area() {
        return this.height * this.width;
    }
}

const circle1 = new Circle("red", 100);
const circle2 = new Circle("red", 200);

const rectangle1 = new Rectangle("yellow", 100, 100);
const rectangle2 = new Rectangle("yellow", 200, 200);

console.log(circle1.area());
console.log(circle2.area());
console.log(rectangle1.area());
console.log(rectangle2.area());