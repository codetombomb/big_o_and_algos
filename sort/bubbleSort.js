//                          BUBBLE SORT time complexity: (O(n^2)), space complexity: (O(1))
// Takes in an array 
// - Start looping with a variable called i from the end of the array towards the beginning 
// - Start an inner loop with a variable called j from the beginning until i - 1
// - If arr[j] is greater than arr[j+1], swap those two values
// - Return the sorted array

function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                //SWAP -- COULD BE A SEPARATE FUNCTION
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        console.log("One Pass Complete")
    }
    return arr
}

bubbleSort([46, 25, 67, 98, 54, 23, 74, 666, 4, 45, 12])