
// Big O of n^2

function printAllPairs(n) {
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j)
        }
    }
}

printAllPairs(5)