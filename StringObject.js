let str = "Hello World";

// Javascript strings are primitive and immutable
// ALL BUILT-IN STRING METHODS DO NOT MODIFY THE ORIGINAL STRING - THEY RETURN NEW STRINGS

console.log(str.length); // returns length of the string

// Converting a String to an Array: If you want to work with a string as an array, you can convert it to an array.
let text = "a,b,c,d,e,f";
let myArray = text.split(",");
myArray.forEach(element => {
    console.log(element);
});

// for(e of myArray) {
//     console.log(e);
// }

// If the separator is "", the returned array will be an array of single characters
let text2 = "Hello";
let myArray2 = text2.split("");
myArray2.forEach(e => {
    console.log(e);
});

// Extracting String Characters:
console.log(str.charAt(0)); // 'H'

// Concatenation:
console.log(str.concat("First Concat", "Second Concat"));

// Extracting String Parts:
console.log(str.slice(0, 4)); // returns the extracted part - if you omit the second index (end), it will extract until the end
console.log(str.substring(0, 4)); // same as slice, but negative values are treated as 0

// Converting to Upper and Lower Case:
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Remove Spaces (Leading and Trailing):
console.log("    Spaces are there    ".trim());
console.log("    Spaces are there    ".trimStart());
console.log("    Spaces are there    ".trimEnd());

// Repeat a String:
console.log(str.repeat(3));

// Replacing String Content: replace a specified value with another value (only the first match)
console.log(str.replace("Hello", "What's up"));
console.log(str); // NO CHANGE MADE IN ORIGINAL STRING IN ANY OF FUNCTIONS
console.log("Microsoft Microsoft".replace(/Microsoft/g, "Google")); // g (global) flag (regex)
console.log("Microsoft Microsoft".replaceAll("Microsoft", "Google"));

// Includes: Boolean
console.log(str.includes("Hello")); // true

// StartsWith or EndsWith: Boolean
console.log(str.startsWith("H")); // true
console.log(str.startsWith("H", 1)); // false

// Searching:
console.log(str.indexOf("World")); // index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found

let text3 = "The rain in SPAIN stays mainly in the plain"; 
let myArray3 = text3.match(/ain/gi); // global and case insensitive search
console.log(myArray3.length + " " + myArray3);

/*
Property access might be a little unpredictable: let char = text[0]
    It makes strings look like arrays (but they are not)
    If no character is found, [ ] returns undefined, while charAt() returns an empty string.
    It is read only. str[0] = "A" gives no error (but does not work!)
*/