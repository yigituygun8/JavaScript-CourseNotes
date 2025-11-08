/*
In JavaScript, everything is an object under the hood.

An object is a variable that can hold many variables.
    -Collections of key-value pairs, where each key (known as property names) has a value
    -Objects can hold different data types as values, including other objects, arrays, functions, etc.
    -Objects are mutable (adding, updating, deleting properties)

The flexibility and dynamic nature of JS is that:
    -You can create object directly using object literals without defining a class

Creating Objects:
let person = {
    name: "John",
    age: 30
};

instead of defining a class and creating instances like in other OOP languages.
(let myObject = new Object() is also possible but not common)
So, object creation can be done with either object literals or constructor functions (new ClassName()).

Java = strict, class-first world.
JavaScript = flexible, object-first world.

PS: Almost always, declare objects with const to prevent reassignment of the object reference itself.
You can still modify the properties of a const object.
*/

let person = {
    name: "Osman Yiğit",
    surname: "Uygun",
    age: 19
}; // called "object literal"

// you can add properties later
person.city = "Ankara";
person['country'] = "Turkey";

// Accessing Object Properties:
console.log(person);
console.log(person.name);
console.log(person.birthdate); // undefined

// or bracket notation instead of dot notation
console.log(person["age"]); // WE NEED QUOTATION MARKS ("" or '' or ``)

let key = 'surname';
console.log(person[key]);

/*
Methods: actions that can be performed on objects.

Methods are functions stored as "object properties"!

Property	Property Value
firstName	John
lastName	Doe
age	        50
eyeColor	blue
fullName	function() {return this.firstName + " " + this.lastName;}
*/

const person2 = {
    firstName: "Yiğit",
    age: 19,
    // greet: function() {
    //     console.log("Hello")
    // } or simply use the built-in syntax
    greet() {
        console.log(`Hello, my name is ${this.firstName}`);
    },
    // this refers to the current person object - works with both of the above methods
    // !!! However, if we use arrow functions, this will not refer to the current object !!!
    sayHello: () => {
        console.log(`Hello, my name is ${this.firstName}`); // this.firstName will be undefined
    },
    
    haveABirthday() {
        this.age++;
    }
};

person2.greet();
person2.sayHello(); // ❌ this doesn't work as expected with arrow functions
/*
Arrow functions do not have their own 'this' context; they inherit 'this' from the surrounding lexical scope.
Therefore, avoid using arrow functions as methods in objects when you need to access the object's properties using 'this'.
*/

person2.haveABirthday();
console.log("Age increased by one: " + person2.age);

// If we have common method like greet() in many objects, we can define it once and reuse it.
function greet() {
    console.log(`Hello, my name is ${this.firstName}`);
}

const person3 = {
    firstName: "Ahmet",
    age: 25,
    greet: greet  // reusing the greet function
};

const person4 = {
    firstName: "Ayşe",
    age: 22,
    greet: greet  // reusing the greet function
};
person3.greet();
person4.greet();
// PS: In real applications, we often use classes to define blueprints for objects with common properties and methods.

