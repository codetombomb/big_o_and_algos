// Write a function called same, which accepts two arrays. 
// The function should return true if every value in the 
// array has it’s corresponding value squared in the second 
// array. The frequency of values must be the same.

// examples :
// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)


// A NAIVE SOLUTION
// TIME COMPLEXITY O(N^2) 

// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2) // set correctIndex to the index in the second array where the squared value from the first array 
//         if (correctIndex === -1) { // if correctIndex is -1, that means that the value is not in the second array so return false.
//             return false;
//         }
//         console.log(arr1)
//         console.log(arr2)
//         arr2.splice(correctIndex, 1) // if the value was found in the second array, remove it and repeat the process.
//     }
//     return true; // If false has not been returned at this point, the first array has all corresponding values squared in the second array 
// }


// REFACTORED
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true;
}
same([1, 2, 3, 2], [9, 1, 4, 4])
