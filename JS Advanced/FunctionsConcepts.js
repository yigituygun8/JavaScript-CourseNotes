// In JS, all functions are object methods and have access to the "this" keyword.
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
console.log(person.fullName()); // Outputs: John Doe

/*
"this" keyword:
    1) Alone, refers to the global object (window in browsers)
    2) In a function, refers to the global object (in non-strict mode) or undefined (in strict mode)
    3) In an object method, refers to the owner object
    4) In an event, refers to the element that received the event
    5) Methods like call(), apply(), and bind() can refer "this" to any object
*/

// call() is a predefined JavaScript method - used to invoke (call) a method with an owner object as an argument (parameter).
const personObject = {
    fullName: function(city) {
        return this.firstName + " " + this.lastName + ", living in " + city;
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe",
    city: "New York"
}

const person2 = {
    firstName: "Mary",  
    lastName: "Smith",
    city: "Chicago"
}

console.log(personObject.fullName.call(person1, person1.city)); // Outputs: John Doe, living in New York
console.log(personObject.fullName.call(person2, person2.city)); // Outputs: Mary Smith, living in Chicago

// apply() - same as call(), but takes an array as an argument -> parameters are passed as an array
console.log(personObject.fullName.apply(person1, [person1.city, "USA"]));

// bind() - an object can borrow a method from another object -> returns a new function, allowing you to pass in a this array and any number of arguments
// we have fullName in personObject, we can bind it to a new object
const member = {
    firstName: "Sam",
    lastName: "Adams"
}

let fullNameMember = personObject.fullName.bind(member, "Boston");
console.log(fullNameMember()); // or don't give Boston in bind and pass it as fullNameMember("Boston");

// sometimes it can be used to preserve "this" context in callbacks
const person3 = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
    console.log(this.firstName + " " + this.lastName);
  }
}

let display = person3.display.bind(person3); // without bind, "this" would refer to the global object in the callback
setTimeout(display, 1000); // After 1 second, displays "John Doe" in the element with id="demo" 

// if we directly passed setTimeout(person3.display, 1000); it would not work as expected because "this" would not refer to person3
// Reminder: call(), apply() and bind() can refer "this" to any object.

// Closures: closures make it possible for a function to have "private" variables. 
// Global and local variables with the same name are different variables.
// Undeclared variables are always global. (without var, let or const)

// Functions have access to the scope "above" them in the code.
function myCounter() {
    let counter = 0; // private variable
    return function() {
        counter += 1;
        return counter;
    }
}
const increment = myCounter();
console.log(increment()); // Outputs: 1
console.log(increment()); // Outputs: 2
console.log(increment()); // Outputs: 3

// Here, the inner function has access to the counter variable defined in the outer function, even after the outer function has finished executing.
// This is because the inner function forms a closure that retains access to the scope of the outer function.
// So, a closure is a function that has access to both its own scope and the parent scope even after the parent function is closed

// IIFE - Immediately Invoked Function Expression
(function() {
    let message = "Hello, World!";
    console.log(message); // Outputs: Hello, World!
})(); // The function is defined and immediately invoked

console.log(increment.toString()); // Outputs the source code of the increment function
