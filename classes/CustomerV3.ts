class CustomerV3 {

    private firstName : string;
    private lastName : string;

    constructor(firstName : string, lastName : string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public getFirstName() : string {
        return this.firstName;
    }

    public setFirstName(name : string){
        this.firstName = name;
    }

    public getLastName() : string {
        return this.lastName;
    }

    public setLastName(name : string){
        this.lastName = name;
    }

}

let myCustomerObjectV3 = new CustomerV3('x', 'y');
myCustomerObjectV3.setFirstName('Kesavan');
myCustomerObjectV3.setLastName('Murali');

console.log(myCustomerObjectV3.getFirstName());
console.log(myCustomerObjectV3.getLastName());