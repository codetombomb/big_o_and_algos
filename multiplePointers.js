// Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.

// Very efficient for solving problems with minimal space complexity as well

// this is going to work on a linear structure like an array or string:
[-4, -3, -2, -1, 0, 1, 2, 5]
"alksjdalksjdlkasjdlks"
// Can also work with singly or doubly linked lists


//                             EXAMPLE 
// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both calues that sum to zero or undefined in a pair does not exist.
sumzero([-3, -2, -1, 0, 1, 2, 3]) //[-3, 3]
sumzero([-2, 0, 1, 3]) //undefined
sumzero([1, 2, 3]) //undefined

// Naive Solution using a nested loop 
// Time complexity is O(n^2)

// function sumZero(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }


// Refactored version 
//Time complexity is O(n)

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

