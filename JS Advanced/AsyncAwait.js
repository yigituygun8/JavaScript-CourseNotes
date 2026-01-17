/*
JS Asynchronous Flow refers to how JS handles operations that take time to complete, such as fetching data from a server, reading files, or waiting for user input, without blocking the main thread.
This allows certain tasks to run in the background while the main program continues executing, and their results are handled once they are ready.

Asynchronous Patterns:
    1) Events 
        -actions or occurrences that happen in the browser, often triggered by user interactions (like clicks, keypresses, or form submissions) or by the browser itself (like page loading or resizing)
    2) Callbacks
        -a function that is passed as an argument to another function, and is intended to be executed at a later point in time, typically when a specific event occurs or an asynchronous operation completes
    3) Promises
        -represent a value that may be available now, later, or never.
    4) Async/Await
        -a syntactic sugar built on top of Promises, introduced in ES2017 (ES8), that allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain.

Synchronous: code is executed line by line, blocking the execution of subsequent code until the current operation completes.
Asynchronous: code can be executed out of order, allowing other operations to run while waiting for long-running tasks to complete.
*/

// New way to handle promises using async/await syntax
// Creating a function that returns a promise
async function logPromise() {
    try {
        const result = await new Promise((res, rej) => {
            setTimeout(() => {
                res("Async/Await: Promise resolved successfully!");
            }, 2000);
        })
        return result;
    } catch (error) {
        console.error("Async/Await: Caught an error:", error.message);
    }
}

// Async functions ALWAYS return a promise. Even though you return a value, it is wrapped in a resolved promise.
// Standard way to consume the promise returned by an async function is not then and catch but try and catch block in function but of course then and catch can also be used


const asyncFunction = logPromise();
console.log(asyncFunction); // Logs: Promise { <pending> } because the promise is not yet resolved (we set timeoout of 2 seconds)


// async and await must be together (cannot use await without async function)