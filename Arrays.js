/* 
Key characteristics of Arrays in JavaScript:
1. Dynamic Sizing: Arrays in JavaScript can grow and shrink in size as elements are added or removed.
2. Heterogeneous: Arrays can hold elements of different data types, including numbers, strings, objects, and even other arrays and even functions.
3. Built-in Methods: JavaScript provides a variety of built-in methods for array manipulation, such as push, pop, shift, unshift, splice, slice, forEach, map, filter, and reduce.

It is a common practice to declare arrays with the const keyword. 
    Const does not mean the array is immutable, but rather that the variable identifier cannot be reassigned!!!
*/

const arr = [1, "two", {three: 3}, [4, 5]]; // Heterogeneous array
arr[4] = 6; // Dynamic sizing - adding an element after declaration
arr[0] = "one"; // Modifying an existing element

console.log(arr);
console.log(arr.toString()); // For an array, toString() converts the array to a comma-separated string (one string as a whole) - Behind the scenes, it actually calls join(",")
console.log(arr.map(e => e.toString()).join(" - "));

console.log("Arrays are objects, no special data type for arrays: " + typeof arr); // object

const arrWithFunctions = [1, 2, () => console.log("Hello from array arrow function!"), function() { return "Hello from another array function!" }];
arrWithFunctions[2](); // Calling the arrow function
console.log(arrWithFunctions[3]()); // Calling the regular function

// Iterating over an array:
console.log("\nIterating using for loop:")
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("\nIterating using forEach loop:");
arr.forEach((el) => {
    console.log(el);
})

console.log("\nIterating using for...of loop:");
for(let el of arr) {
    console.log(el);
}

// Check if our object is specifically an array
console.log("\nCheck if arr is an array: " + Array.isArray(arr)); // true
console.log("Second way to check if arr is an array: " + (arr instanceof Array)); // true

// Objects in arrays and nested arrays
const cars = [
    {name: "Ford", models: ["Fiesta", "Focus", "Mustang"]},
    {name: "BMW", models: ["320", "X3", "X5"]},
    {name: "Fiat", models: ["500", "Panda"]}
];

for(let i in cars) {
    console.log(cars[i].name); 
    for(let j in cars[i].models) {
        console.log("  " + cars[i].models[j]);
    }
}

// ARRAY METHODS:
const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log("Size: " + fruits.length);
// length can also be used to truncate or expand an array
// fruits.length = 2;
// console.log("Truncated Array: " + fruits);

console.log("To String: " + fruits.toString());

// Normally you can't access with negative indices, but you can use at() method
console.log("Last element using at(): " + fruits.at(-1));

// Join: joins all array elements into a single string with a specified separator
let joinedFruits = fruits.join(" - ");
console.log("Joined Fruits: " + joinedFruits);

// Shift and Unshift: remove/add elements at the beginning
let shifted = fruits.shift(); // returns the removed element
console.log(shifted, fruits);

let newSize = fruits.unshift("Banana"); // returns the new size of the array
console.log(newSize, fruits);

// Push and Pop: add/remove elements at the end
let popped = fruits.pop(); // returns the removed element
console.log(popped, fruits);

let newSizeAfterPush = fruits.push("Pineapple"); // returns the new size of the array
console.log(newSizeAfterPush, fruits);

// Modifying elements directly
fruits[0] = "Strawberry"; 
console.log(fruits);

// Concat: merging arrays
const boys = ["John", "Peter", "Mark"];
const girls = ["Mary", "Sally", "Jane"];
const all = boys.concat(girls); // Does not modify the original arrays, returns a new array
console.log(all);

// Splice: adding/removing elements at a specific index - syntax: splice(startIndex, deleteCount, item1, item2, ...)
let removedItems = fruits.splice(1, 2, "kiwi");
console.log("After Splice: " + fruits + ", Removed: " + removedItems);
// fruits.splice(0, 1) can be used to delete an element from beginning (same with shift) - fruits.splice(0, n) - delete n elements from beginning

// Slice: extracting a portion of an array - syntax: slice(startIndex, endIndex) - returns a new array, does not modify the original
const sliced = fruits.slice(0, 2); // end exclusive
console.log("Sliced portion: " + sliced + " Original: " + fruits);
console.log("End index not specified: " + fruits.slice(1)); // slices out the rest of the array from startIndex

// SEARCHING IN ARRAY:

console.log("Index of Apple: " + fruits.indexOf("Apple")); // -1 if not found | returns the index of the first occurrence
// also there is lastIndexOf() to find the last occurrence

console.log("Includes Strawberry? " + fruits.includes("Strawberry")); // true/false
console.log("Includes NaN? " + [1, 2, NaN].includes(NaN)); // true

// Find, FindIndex, Filter, Some, Every:
// These methods are useful when working with arrays of objects or complex data structures
const nums = [5, 12, 8, 130, 44];
const firstLargerThan10 = nums.find(n => n > 10);
console.log("\nFirst number larger than 10 using find():", firstLargerThan10); // Output: 12

const firstLargerThan10Index = nums.findIndex(n => n > 10);
console.log("Index of first number larger than 10 using findIndex():", firstLargerThan10Index); // Output: 1

// findLast is added in ES2023
const lastLargerThan10 = nums.findLast(n => n > 10);
console.log("First number larger than 10 from the end using findLast():", lastLargerThan10); // Output: 44