// Declaring and initializing variables
let found : boolean = false;
let count : number = 10;
let temparature : number = 93.6;
let firstname : string = 'Kesavan';
let lastname : string = "Murali";

let numm : number;

// Modifying the values of variables.
found = true;
count = 11;
firstname = "NewMan";


console.log(found);
console.log("Hi " + firstname + " " + lastname);
// Note the use of Back ticks.
console.log(`Hi ${firstname} ${lastname}`);

// Strongly-typed.  So does not allow changes in type.
// Following statements wont pass the compilation.
/*
found = 0;
firstname = 20;
console.log(numm); // Error since the variable being used before assigning.
*/