/*
Fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers. 
It is built on top of Promises, providing a more powerful and flexible feature set for making network requests compared to the older XMLHttpRequest.
*/

const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=39.9199&longitude=32.8543&hourly=temperature_2m&current=temperature_2m";

let isLoading = true; // to indicate loading state
fetch(apiUrl)
    .then((response) => {
        if(!response.ok) {
            throw new Error("Network response was not ok " + response.status);
        }
        console.log(isLoading ? "Loading..." : "Loaded");
        // Since APIs usually return data in JSON format, we use response.json() to parse the response body as JSON into a JavaScript object
        return response.json(); // returns a PROMISE that resolves to a JS object. This object can be anything that can be represented in JSON format - an object, array, string...
    }).then((data) => { // we need another then to handle the promise returned by response.json() !!!
        // console.log("Fetched Data: ", data);
        console.log(`Temperature: ${data.current.temperature_2m} ${data.hourly_units.temperature_2m}`);
    }).catch(error => {
        console.error("Fetch error: ", error.message);
    }).finally(() => {
        // Runs regardless of the fetch operation's fulfillment or rejection - you can use it for cleanup tasks, disabling loading indicators, etc.
        isLoading = false; // depending on this loading state, you can show a loading spinner in your UI
        console.log(isLoading ? "Loading..." : "Loaded!");
    });

// Newer way of handling promises is to use async/await syntax
async function fetchData() {
    try {
        const response = await fetch(apiUrl); // wait for the fetch promise to resolve
        // fetch does not reject on HTTP error status even though the response is an error - it only rejects on network failure or if anything prevented the request from completing
        // so we need to check response.ok for HTTP errors
        if(!response.ok) { 
            throw new Error("HTTP response was not ok " + response.status);
        }
        const data = await response.json(); // wait for the promise to resolve to a JS object
        console.log(`Temperature (async/await): ${data.current.temperature_2m} ${data.hourly_units.temperature_2m}`);
    } catch (error) {
        console.error("Fetch error: ", error.message);
    } finally {
        isLoading = false;
        console.log(isLoading ? "Loading..." : "Loaded!");
    }
}

fetchData(); // calling the async function