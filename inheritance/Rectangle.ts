import {Shape} from "./Shape";

export class Rectangle extends Shape {

    constructor(x : number, y : number,
        private _width : number, 
        private _length : number) {
        super(x, y);
    }

    get length() : number {
        return this._length;
    }

    set width(val : number){
        this._width = val;
    }

    get width() : number {
        return this._width;
    }

    set length(val : number){
        this._length = val;
    }

    getInfo() : string {
        return super.getInfo() + `, length = ${this.length}, width = ${this.width}`;
    }

}