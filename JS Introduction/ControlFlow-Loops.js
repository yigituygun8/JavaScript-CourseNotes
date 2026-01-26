let randomNum = Math.random(); // generates a random number between 0 and 1 (inclusive of 0, but not 1)

while(randomNum < 0.5) {
    console.log(`Random number is ${randomNum}, which is less than 0.5. Generating a new number...`);
    randomNum = Math.random();
}
console.log(`Random number is ${randomNum}, which is 0.5 or greater. Exiting loop.`);
// or use do-while to ensure the loop runs at least once

for(let i = 0; i < 5; i++) {
    console.log(`Iteration ${i + 1}: Random number is ${Math.random()}`);
}

// Jump Statements: continue and break
for(let i = 0; i < 10; i++) {
    if(i % 2 === 0) {
        continue; // go to the next iteration, skip this one
    }
    console.log(`Odd number found: ${i}`);
}