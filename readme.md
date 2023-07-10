# Typescript Training

## Step-0 : Typescript Basics

- Typescript is a superset of javascript and also ECMAScript
- Strongly-typed languages, needs compilation
- Write code in typescript and on successful compilation, it generates javascript equivalents.
- Includes Object-Oriented applications
- Widely prefered for writing javascript frameworks like Angular, etc.

### Environment setup

Please install the following for smooth learning.
    
- Visual Studio code or any other IDE
- node
- npm
- tsc - Typescript compiler

## Step-1 : Hello "Typescript" World

- Create a folder, say named "typescript-training".
- Create a file "helloworld.ts" containing the following code
```typescript
    console.log("Hello Typescript World");
```
- Open a terminal(cmd) to compile the code with typescript compiler and that would create a javascript file "helloworld.js".
```shell
    tsc helloworld.ts
```
- Run the javascript file with node
```shell
    node helloworld.js
```
- That should print the desired output.
```shell
    Hello Typescript World
```

## Step-2 : Hello Variables

Following are the few available variables in typescript.

- boolean
- number
- string
- any
- And others...

### Define a variable

```typescript
    let <variablename> : <type> = <initialValue>;
```
#### Examples

```typescript
    let found : boolean = false;
    let count : number = 10;
    let temparature : number = 93.6;
    let name : string = 'Kesavan';
    let lastname : string = "Murali";

    found = true;
    count = 11;
    name = "NewMan";

    // Strongly-typed.  So does not allow changes in type.
    // Following statements wont pass the compilation.

    found = 0;
    name = 20;
```

#### Any type

- Dont use for simple variables.
- Should be useful when using Arrays, Lists and other complex data structures.

#### Template Strings

Useful for long strings with a lot of concatenation.
```typescript
    let firstname : string = 'Kesavan';
    let lastname : string = 'Murali';

    console.log("Hi " + firstname + " " + lastname);
    // Note the use of Back ticks.
    console.log(`Hi ${firstname} ${lastname}`);
```

##### Note on Compilation failure

- In case of compilation failure, the typescript compiler will still generate the javascript file.  
- To stop this, use "--noEmitOnError" option like follows.
```shell
    tsc --noEmitonError helloVariables.ts
```

## Step-3 : Staying in the loop

Following code snippet shows the few usages of for loops in typescript.
```typescript
    // Simple for loop
    console.log("Printing numbers");
    for(let i = 0; i < 5; i++){
        console.log(i);
    }

    // Simple array of numbers.
    let numbers : number[] = [5, 5, 4.5, 1, 3]

    // Arrays are dynamic in size
    numbers.push(2);

    // Iterating the array - Without using the index
    for(let val of numbers){
        console.log(val);
    }
```

## Step-4 : Classes and Objects

If you are coming from a languages like Java and C++.  The syntax may be quite familiar already.  So, here instead of dwelling too much on the syntax, will just jot down the important/different points.

- properties are **public** if no access modifiers are specified.
- `new` operator is used to create an object of the class.
- `constructor` is used as the constructor's name, unlike the Class name itself like other languages.
- `this` keyword represents the current object of the class.
- Private properties are expected to be accessed via getters and setters.
- Typescript provides a special get/set methods as **Accessors**.  With which private variables can be treated like public in the clients.
- Also, there is a way to specify the private properties within the constructor **Parameter properties** itself.

### Modules

Usage of modules is the first step in **Code Organisation**.

- Each class can be *exported* as a module and be used in a different class by *importing*.
- A function or a variable may also be exported.
- Keywords - **import** , **export**

##### Note on Compilation failure

- In case of compilation failure with the above mentioned features like Parameter properties and Accessors, the compiler may need to be set with a higher target of "ES5". 
- To stop this, use "--target ES5" option like follows.
```shell
    tsc --target ES5 helloVariables.ts
```

## Step-5: Inheritance

- **Extending a class**
    - with `extends` keyword, a class can derive the properties of another class.
    - The constructor of the subclass should call super constructor using `super` keyword.
- **Abstract class**
    - A class with abstract methods, just like in Java.
    - Wont be able to instantiate the class.  Only subclasses are allowed.
    - `abstract` keyword can be used on class and method declaration.
- **Interfaces**
    - Interface represents complete abstraction.
    - `interface` keyword needs to be used on class declaration.