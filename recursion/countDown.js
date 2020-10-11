// Example of a recursive function 

// Naive Approach (iteratively)

function countDown(num) {
    if (num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num)
}

