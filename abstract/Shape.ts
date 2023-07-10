export abstract class Shape {

    constructor(private _x : number, private _y : number){
    }

    public get x() : number {
        return this._x;
    }

    public get y() : number {
        return this._y;
    }

    public set x(val : number){
        this._x = val;
    }

    public set y(val : number){
        this._y = val;
    }

    abstract calculateArea() : number;

    getInfo() : string {
        return `x = ${this._x}, y = ${this._y}`;
    }

}