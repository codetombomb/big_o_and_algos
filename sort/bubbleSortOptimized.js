// ADDING OPTIMIZING SHORT CIRCUIT USING A VARIABLE CALLED noSwaps


function bubbleSort(arr) {
    let noSwaps;                                          //noSwaps
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;                                   //noSwaps
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                //SWAP -- COULD BE A SEPARATE FUNCTION
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwaps = false;                          //noSwaps
            }
        }
        if (noSwaps) break;                                //noSwaps
    }
    return arr
}

bubbleSort([1, 2, 3, 4, 8, 5, 6, 7])