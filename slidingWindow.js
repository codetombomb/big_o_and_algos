//                  The Sliding Window Pattern

// This pattern involves creating a window which can either be an array or number from one position to another. 

// Depending on a certain condition, the window either increases or closes (and a new window is created)

// Very usefil for keeping track of a subset of data in an array/string etc.

// Useful in finding the longest sequence of unique characters in a string. 

"hellothere" // 'lother'

//                         An Example

// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maxumum sum of n consecutive elements in the array.

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 10
maxSubarraySum([4, 2, 1, 6], 1) // 10
maxSubarraySum([4, 2, 1, 6, 2], 4) // 10
maxSubarraySum([], 4) // null


// NAIVE SOLUTION (non-slilding)

// function maxSubarraySum(arr, num) {
//     // If the number (window) is larger than the array length, return null; 
//     if (num > arr.length) {
//         return null;
//     }
//     // Create a varible called max that is set to -Infinity; (This is another edge case that will allow us to have all negative numbers in the passed in array)
//     let max = -Infinity;
//     // Loop through the array and limit the window to the end of the array minus the number passed in + 1; 
//     for (let i = 0; i < arr.length - num + 1; i++) {
//         let temp = 0;
//         // Add a window of three (num) numbers in a row
//         for (let j = 0; j < num; j++) {
//             temp += arr[i + j];
//         }
//         // Update max if temp is the larger of the two
//         if (temp > max) {
//             max = temp
//         }
//         return max;
//     }
// }

//                 SLIDING WINDOW REFACTOR

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
} 