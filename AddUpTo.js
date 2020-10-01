// Write an function that calculates the sum of all numbers from 1 up to (and including) some number (n).

// SOLUTION 1 -- This solution adds to a running total and increments up to n then returns the total.
// function addUpTo(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//         total += i
//     }
//     return total;
// }


// SOLUTION 2 -- http://www.maths.surrey.ac.uk/hosted-sites/R.Knott/runsums/triNbProof.html Sigma notation
function addUpTo(n) {
    return n * (n + 1) / 2
}

// console.log(addUpTo(30))
// console.log(addUpTo(105))
// console.log(addUpTo(450))
// console.log(addUpTo(100))


// The two variables, t1 and t2, are taking time stamps before and after the function is executed and then they are subtracted to calculate the difference. It can give a rough idea about how one function might be better than another but the results can vary drastically one the same machine using the same input and on different machines as well. This is the problem with using time to compare the performance of algorithms.
var t1 = performance.now()
addUpTo(10000000000)
var t2 = performance.now()
console.log(`Elapsed time ${(t1 - t2) / 1000} seconds.`)
