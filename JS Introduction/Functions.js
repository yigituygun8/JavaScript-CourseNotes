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

/*
Callback Functions: functions passed as arguments to other functions

When to use?:
1) Asynchronous operations (e.g., handling events, making API calls)
2) Control order of execution -> sometimes you want a function to execute only after another function has completed its task
3) For event handling -> callbacks are commonly used to handle events like button clicks, form submissions, etc. (the callback runs only when the event happens)
4) Custom operations on data structures -> functions like map, filter, and reduce take callback functions to define custom operations on arrays

Common problems with Callbacks:
1) Callback Hell: when callbacks are nested within other callbacks several levels deep, making code hard to read and maintain
    - To avoid this, use Promises or async/await for better readability and error handling
*/ 

function add2(a, b) { return a + b; }
function subtract(a, b) { return a - b; }

function calculate(a, b, operation) {
    return operation(a, b); // operation is a callback function - passed as parameter
}

// then we call calculate
console.log("Using callback function in calculate func: " + calculate(5, 10, add2));


/*
Anonymous Functions: functions without a name, often used as arguments to other functions or assigned to variables
They are useful for short-lived functions that are not reused elsewhere, need one time so we don't bother defining.
*/

console.log("Anonymous function example: " + calculate(5, 10, function(a, b) { return a + b; })); // passing anonymous function as callback
// or
let multiplication = function(a, b) { return a * b; }; // assigning anonymous function to variable if you want a name
let result = multiplication(4, 5); // invoking the function
console.log("Result of anonymous function assigned to variable: " + result);

/*
Arrow Functions: a more concise syntax for writing functions, introduced in ES6
    - You can skip the "function", "return" keywords and the curly braces {} for single-expression functions
    - Multi-line functions still need curly braces and explicit return statements
    - An alternative to anonymous functions

Syntax:
const/let functionName = (parameters) => expression;

Before arrow:
    let myFunc = function(a, b) { return a + b; }
After arrow:
    let myFunc = (a, b) => a + b;

let hello = () => "Hello!";

| Syntax                       | Works? | Why                                    |
| ---------------------------- | ------ | -------------------------------------- |
| `(x, y) => x * y`            | ✅      | Single expression, implicitly returned |
| `(x, y) => { x * y }`        | ❌      | `{}` means block, no `return` used     |
| `(x, y) => return x * y`     | ❌      | `return` not allowed without `{}`      |
| `(x, y) => { return x * y }` | ✅      | Proper block + explicit return         |

- Good habit to always use {} and return for clarity in larger functions
*/

let hello = () => { return "Hello!" }; // have implicit return
console.log(hello());

let add3 = (a, b) => { return a + b; }; 
console.log(calculate(7, 3, add3)); // using arrow function as callback