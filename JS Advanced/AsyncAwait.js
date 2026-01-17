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

// Async functions always return a promise
// Standard way to consume the promise returned by an async function is not then and catch but try and catch block in function but of course then and catch can also be used


const asyncFunction = logPromise();
console.log(asyncFunction); // Logs: Promise { <pending> } because the promise is not yet resolved (we set timeoout of 2 seconds)


// async and await must be together (cannot use await without async function)