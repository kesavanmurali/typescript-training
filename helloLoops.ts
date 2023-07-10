// Simple for loop
console.log("Printing numbers");
for(let i = 0; i < 5; i++){
    console.log(i);
}

// Simple array of numbers.
let numbers : number[] = [5, 5, 4.5, 1, 3]


console.log("Printing array elements - Way 1")
// Iterating the array - Way 1
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

// Arrays are dynamic in size
numbers.push(2);

console.log("Printing array elements - Way 2")
// Iterating the array - Way 2
for(let val of numbers){
    console.log(val);
}
