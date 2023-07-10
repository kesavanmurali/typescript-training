class CustomerV5 {

    constructor(private _firstName : string, 
            private _lastName : string){
    }

    get firstName() : string {
        return this._firstName;
    }

    set firstName(name : string) {
        this._firstName = name;
    }

    get lastName() : string {
        return this._lastName;
    }

    set lastName(name : string){
        this._lastName = name;
    }

}

let myCustomerObjectV5 = new CustomerV5('x', 'y');
myCustomerObjectV5.firstName = 'Kesavan';
myCustomerObjectV5.lastName = 'Murali';

console.log(myCustomerObjectV5.firstName);
console.log(myCustomerObjectV5.lastName);