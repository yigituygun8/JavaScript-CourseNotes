/*
Math object - built-in object that has properties and methods for mathematical constants and functions.
It is static, so no need to create an instance of it.

Example usages: 
- Math.PI: returns the value of PI
- Math.pow(x, y): returns the value of x to the power of y
- Math.sqrt(): returns the square root of a number
- Math.random(): returns a random number between 0 (inclusive) and 1 (exclusive)
- Math.round(): rounds a number to the nearest integer
- Math.ceil(): rounds a number up to the nearest integer
- Math.floor(): rounds a number down to the nearest integer
- Math.trunc(): removes the decimal part of a number
- Math.abs(): returns the absolute value of a number
- Math.max(): returns the largest of zero or more numbers
- Math.min(): returns the smallest of zero or more numbers
*/

/*
Math.random(): always returns a number lower than 1 and greater than or equal to 0
Since there is no "int", for typecasting to integer, we use Math.floor() or Math.trunc() to get rid of decimal part
*/ 
console.log("Random number between 0 and 1: " + Math.random());
console.log("Random integer between 0 and 9: " + Math.floor(Math.random() * 10)); // 0-9
console.log("Random integer between 1 and 10: " + Math.floor(Math.random() * 10 + 1)); // 1-10

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // inclusive of both min and maxq
}

console.log(Math.min(5, 10, -3, 0, 25)); // returns -3
console.log(Math.max(5, 10, -3, 0, 25)); // returns 25