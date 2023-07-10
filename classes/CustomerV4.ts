class CustomerV4 {

    private _firstName : string;
    private _lastName : string;

    constructor(firstName : string, lastName : string){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    public get firstName() : string {
        return this._firstName;
    }

    public set firstName(name : string) {
        this._firstName = name;
    }

    public get lastName() : string {
        return this._lastName;
    }

    public set lastName(name : string){
        this._lastName = name;
    }

}

let myCustomerObjectV4 = new CustomerV4('x', 'y');
myCustomerObjectV4.firstName = 'Kesavan';
myCustomerObjectV4.lastName = 'Murali';

console.log(myCustomerObjectV4.firstName);
console.log(myCustomerObjectV4.lastName);