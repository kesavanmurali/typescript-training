import {Shape} from "./Shape";

export class Circle extends Shape {

    constructor(x : number, y : number, private _radius : number) {
        super(x, y);
    }

    get radius() : number {
        return this._radius;
    }

    set radius(val : number){
        this._radius = val;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    getInfo() : string {
        return `x = ${this.x}, y = ${this.y}, radius = ${this._radius}`;
    }

}