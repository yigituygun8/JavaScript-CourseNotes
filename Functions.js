/*
Functions: reusable blocks of code that perform a specific task

Function Syntax:
function functionName(parameters) {
    // code to be executed
}

-Can return optional values using the return statement

Function Invocation ()
The code inside the function will execute when "something" invokes (calls) the function:
    When it is invoked (called) from JavaScript code
    When an event occurs (a user clicks a button)
    Automatically (self invoked)
    The () operator invokes the function.
*/ 

let name2 = "Alice"; // global scope variable
function greet(name) {
    console.log(`Hello, ${name}`);
    console.log("Hello, " + name2);
} // this is a block (between { })

greet("Yiğit");
console.log(greet("Bob")); // function returns undefined by default if no return statement
console.log(greet); // prints the function object itself

// Function parameters default to undefined if not provided
function add(a, b) {
    console.log(a, b);
    return a + b;
}

console.log(add(5)); //  b will be undefined by default - prints 5 + undefined = NaN (Not a Number)
console.log(add(5, 10)); // prints 15

function multiply(a = 1, b = 1) { // default parameters
    return a * b;
}

console.log(multiply(5)); // a will override its default value - b will be 1 by default

