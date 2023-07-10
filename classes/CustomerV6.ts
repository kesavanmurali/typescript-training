export class CustomerV6 {

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