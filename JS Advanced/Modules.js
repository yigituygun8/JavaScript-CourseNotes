// https://www.youtube.com/watch?v=EerdGm-ehJQ&t=60s
// Modules are reusable pieces of code that can be imported and exported between different files in a JavaScript project.
// This allows for better organization and modularity in code.

// Example of exporting a module
// mathUtils.js
export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b;
}

// Example of importing a module
// main.js - must be in a module context (e.g., using type="module" in HTML or .mjs extension)
import { add, subtract } from './mathUtils.js'; // or import * as mathUtils from './mathUtils.js'; to import everything -> mathUtils.add(), mathUtils.subtract()
// These are called "named exports" and "named imports". You must enclose them in curly braces {}.

// Default Export and Import
// You can also have a default export in a module, which allows you to import it without curly braces. A file can have only one default export.
// defaultExport.js
export default function mainFunction(a, b) {
    // some code for default (main) function
}

// main.js
import mainFunc from './defaultExport.js'; // No curly braces needed for default export and any name can be used

// Re-exporting Modules
// You can re-export modules from another module
// reExport.js
export { add, subtract } from './mathUtils.js';
export { default as mainFunc } from './defaultExport.js';

// main.js
import { add, subtract } from './reExport.js';
import { mainFunc } from './reExport.js';

import * as math from './mathUtils.js'; // Importing all named exports as an object (namespace import)
let mySum = math.add(5, 10);
let myDiff = math.subtract(10, 5);

// Imported variables, functions, or classes are read-only views of the exported values. 
// You cannot reassign them directly.

// DYNAMIC IMPORT VS STATIC IMPORT
// Static imports (using import statement) are hoisted to the top of the file and are loaded before the rest of the code runs.

// Dynamic imports (using import() function) can be used anywhere in the code and return a promise that resolves to the module object.
// Dynamic import was introduced in ES2020 and is useful for code-splitting and lazy-loading modules, efficiently loading code only when needed.
// Uses async/await or .then() to handle the promise returned by dynamic import.
// import("path/to/module.js")

// Example of dynamic import
// in mathUtils.js
export function add(a, b) {
    return a + b;
}

// in main.js
async function run() {
    try {
        // await keyword pauses the execution until the promise is resolved
        const module = await import('./mathUtils.js'); // Promise is the import of the module here
        let result = module.add(2, 3);
        console.log(result); // 5
    } catch (error) {
        console.error("Error loading module:", error);
    }
}
run();