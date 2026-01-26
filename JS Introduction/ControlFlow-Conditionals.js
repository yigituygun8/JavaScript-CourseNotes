// If Statements
let isSignedIn = false;

if(isSignedIn) {
    console.log("welcome!")
}
else {
    console.log("you ain't logged in!");
}

// Equality Operators:
let a = 10;
let b = "10";
console.log(a == b); // True - Loose equality, only checks value, does type coercion
console.log(a === b); // False - Strict equality, checks both value and type
console.log(a != b); // False - Loose inequality, only checks value
console.log(a !== b); // True - Strict inequality, checks both value and type
/*
Therefore, we almost always want to use strict equality/inequality operators (=== and !==) to avoid unexpected type coercion issues.

What is Type Coercion?
Type coercion (implicit type casting) is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). 
This can lead to unexpected results in comparisons if not carefully managed.

PS: If either operand is a string, the + operator prefers string concatenation over numeric addition.

| Expression  | Type Coercion        | Result |
| ----------- | -------------------- | ------ |
| `5 + "9"`   | String concatenation | `"59"` |
| `"5" - "9"` | Numeric conversion   | `-4`   |
| `5 + +"9"`  | Numeric addition     | `14`   |
*/ 
let val = undefined;
if(val == null) {
    console.log("val is null or undefined");
} // they are considered to have equal values but not same types, so loose equality works here

/*
| Falsy value | Description                        |
| ----------- | ---------------------------------- |
| `false`     | the boolean `false`                |
| `0`         | the number zero                    |
| `-0`        | negative zero                      |
| `""`        | empty string                       |
| `null`      | absence of value                   |
| `undefined` | variable declared but not assigned |
| `NaN`       | “Not-a-Number”                     |
Any other value is considered truthy.

0 == false       // true  (coerced)
0 === false      // false (different types)
"" == false      // true (coerced, same values - both falsy)
"" === false     // false (different types)
null == undefined // true (special case)
*/ 

// Other Comparison Operators:
console.log(5 > 3);  // true
console.log(10 < "10"); // false (type coercion to number)
console.log(10 < "11"); // true (type coercion to number)
console.log("abc" < "abd"); // true (lexicographical comparison)
console.log("22" < "8"); // true (lexicographical comparison - 2 is smaller than 8)



// Logical Operators:
console.log("Logical Operators:");
let isAdmin = true;
let isEditor = false;

console.log(isAdmin && isEditor); // false (AND)
console.log(isAdmin || isEditor); // true (OR)
console.log(!isAdmin); // false (NOT)

// Switch Statements:
let food = 'banana';

switch(food) {
    case 'banana':
        console.log("Yellow fruit");
        break;
    case 'apple':
        console.log("Red or green fruit");
        break;
    default:
        console.log("Unknown fruit");
        break;
}

// Ternary (Conditional) Operator:
let age = 20;
let isAdult = (age >= 18) ? "Adult" : "Minor"; // we avoid bunch of lines with if-else
console.log(isAdult); // "Adult"