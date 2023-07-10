class CustomerV2 {

    firstName : string;
    lastName : string;

    constructor(fName : string, lName : string){
        this.firstName = fName;
        this.lastName = lName;
    }

}

let myCustomerObjectV2 = new CustomerV2('Kesavan', 'Murali');

console.log(myCustomerObjectV2.firstName);
console.log(myCustomerObjectV2.lastName);