// Write a function that takes in a number. The from 1 to the number passed in, add all numbers recursively. 


function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

// sumRange(3)
//     return 3 + sumRange(2)
//                     return 2 + sumRange(1)
//                                     return 1
//                     return 2 + 1
//     return 3 + 3 
// => 6




// Stack overflow @ sumRange(100000)