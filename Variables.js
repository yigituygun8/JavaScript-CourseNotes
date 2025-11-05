console.log("Hello, World!");

let text = "C++"; // Strings are immutable in JavaScript
text = "JavaScript is fun!"; // this means C++ still exists in memory but no longer referenced, text refers to a new string
console.log(text);

// STRINGS:
// double quote, single quote or backtick can be used
let singleQuote = 'This is a "string" in single quotes';
let doubleQuote = "This is a 'string' in double quotes";
console.log(singleQuote);
console.log(doubleQuote);
// or you can escape with \ -> let escapedSingle = 'It\'s a nice day';

// Backticks are used to define template literals. A special type of string that can span multiple lines and embed expressions.
let myName = "Yigit";
let greeting = `Hello ${myName}`;
console.log(greeting);

// or do concatenation with +
let greeting2 = "Hello " + myName + "!";
console.log(greeting2);

// NUMBERS:
let num = 5;
num += 4;
num++;
console.log(num + 5); // +, -, *, /, %, ** (exponentiation)
console.log(num / 4); // 2.5 - we don't have integers and floats, just number type
console.log(num ** -2); // 0.01
console.log(.1 + .2); // 0.30000000000000004 - floating-point decimal imprecision

// BOOLEANS:
let val = 5 + 5 === 10; // true
console.log(val);

/*
NULL and UNDEFINED:  
The type undefined indicates a variable that has no assigned value, whereas null is an explicitly set single value used to show an empty value
*/ 
let undef;
console.log(undef); // undefined
let empty = null;
console.log(empty); // null

