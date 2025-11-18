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