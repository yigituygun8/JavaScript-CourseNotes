/*
var vs let Comparison:

Feature                    | var                                      | let
---------------------------|------------------------------------------|------------------------------------------
Scope                      | Function-scoped (globally scoped)        | Block-scoped { }
Hoisting                   | Hoisted and initialized as undefined     | Hoisted but NOT initialized (TDZ)
Re-declaration             | Allowed in same scope                    | Not allowed
Re-assignment              | Allowed                                  | Allowed
Global object property     | Creates property on window (browser)     | Does not
Temporal Dead Zone         | No                                       | Yes (before declaration)
Best practice              | Avoid (outdated)                         | Use for variables that change

*/
// Scope
if (true) {
    var x = 10;
    let y = 20;
}
console.log(x); // 10 ✅
console.log(y); // ❌ ReferenceError

// Re-declaration
var a = 1;
var a = 2; // ✅ OK

let b = 1;
let b = 2; // ❌ SyntaxError

// Hoisting
console.log(c); // undefined (var hoisted (declared but not initialized))
console.log(d); // ❌ ReferenceError (TDZ)
var c = 5;
let d = 5;

// const: scope is same as let (bock-scoped)
const num = 10;
num++; // ❌ TypeError: Assignment to constant variable.

const arr = [1, 2, 3];
arr.push(4); // ✅ Allowed
// const in arrays/objects means the reference cannot be changed, but the contents can be modified.