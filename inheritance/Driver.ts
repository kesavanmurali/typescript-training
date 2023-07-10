import {Shape} from './Shape';
import {Circle} from './Circle';
import { Rectangle } from './Rectangle';

let myShape = new Shape(1, 2);
console.log(myShape.getInfo());

let myCircle = new Circle(3, 4, 5);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(6, 7, 8, 9);
console.log(myRectangle.getInfo());

let shapesArr : Shape[] = [];

shapesArr.push(myShape);
shapesArr.push(myCircle);
shapesArr.push(myRectangle);

for(let aShape of shapesArr){
    console.log(aShape.getInfo());
}

