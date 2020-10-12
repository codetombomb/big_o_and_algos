// 4! = 4 factorial which is = 4 * 3 * 2 * 1


// Using for loop:
// function factorial(num){
//     let total = 1;
//     for (let i = num; i > 1; i--){
//         total *= i;
//     }
//     return total;
// }

// Factorial using resursion 

function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1)
}

