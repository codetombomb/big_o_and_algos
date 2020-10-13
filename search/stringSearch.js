// Define a function that takes in two strings, a large string, and the pattern
// that we are looking for. For every pattern match in the large string, 
// increment a counter and return the count at the end.

function stringSearch(long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) break;
            if (j === short.length - 1) count++;
        }
    }

    return count;
}

stringSearch("holy holly hounded harold hastily how horrible", "ho")

//PSEUDO CODE:
// Loop over the string 
    // Loop over the pattern
        // if the characters don't match, break out of the inner loop
        // if the characters do match, keep going
        // if you complete the inner loop and find a match, increment the count
        // and return the count at the end