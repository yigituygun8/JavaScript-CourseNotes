// Promise is an object representing the eventual completion or failure of an asynchronous operation.
// States -> Pending, Fulfilled, Rejected

// Creating a Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved successfully!");
        // reject(new Error("Promise rejected due to an error."));
    }, 2000)
})

// setTimeout(() => {
//     console.log(promise); 
// }, 1000); // Logs: Promise { <pending> }

// setTimeout(() => {
//     console.log(promise); 
// }, 3000); // Logs: Promise { 'Promise resolved successfully!' }
 
// Consuming a Promise - "then" executes when the promise is fulfilled
promise.then((value) => {
    console.log(value); // Logs: Promise resolved successfully!
}).catch((error) => {
    console.error(error.message);
});

// Consuming a Promise - "catch" executes when the promise is rejected
// We can chain multiple then() and catch() methods
promise
    .then((value) => {
        console.log("First then:", value);
        return "Data from first then";
    })
    .then((data) => {
        console.log("Second then:", data);
    })
    .catch((error) => {
        console.error("Caught an error:", error.message);
    }).finally(() => {
        console.log("Promise processing completed.");
    });


// Using Promise.methods
const myPromise = Promise.resolve(8); // creates a resolved promise with value 8 - or reject()
console.log(myPromise); // Logs: Promise { 8 }

const all = Promise.all([
    Promise.resolve(3),
    Promise.resolve(42)]);

console.log(all); // Logs: Promise { <pending> } - resolves when all promises resolve
all.then((values) => {
    console.log("Promise.all resolved with values:", values); // Logs: [3, 42]
})

/*
Promise.all is a method that takes an array of promises and returns a new promise. This new promise:
    -Resolves when all the promises in the array are resolved. 
    It gives you an array of their results (in the same order). 
    
    -Rejects immediately if any promise in the array rejects, 
    with the reason from the first rejected promise.

It is useful when you want to wait for multiple asynchronous operations to complete and you care if all of them succeed.
*/

Promise.race([ // returns a promise that resolves or rejects as soon as one of the promises in the array resolves or rejects (returns first one that is settled)
    new Promise((resolve) => setTimeout(() => resolve("First"), 500)),
    new Promise((resolve) => setTimeout(() => resolve("Second"), 1000))
]).then((value) => {
    console.log("Promise.race resolved with value:", value); // Logs: First
});

Promise.any([ // returns a promise that resolves as soon as any of the promises in the array resolves (ignores rejected ones)
    Promise.reject("Error 1"),
    Promise.resolve("Success 1"),
    Promise.resolve("Success 2")
]).then((value) => { console.log("Promise.any resolved with value:", value); // Logs: Success 1
}).catch((error) => {
    console.error("Promise.any rejected with error:", error);
}); // if there is no resolved promise, meaning all of them rejects, it rejects with an AggregateError - All promises were rejected.