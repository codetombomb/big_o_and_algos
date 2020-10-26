//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
//************************RADIX SORT HELPERS***********************
//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*





//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
//*****************************GET DIGIT***************************
//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

// In order to implement radix sort, it's helpful to build a few 
//helper functions first: 

// getDigit(num,place) - returns the digit in num at the given 
//place value. (this was taken from StackOverFlow)

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

getDigit(7323, 2); // 3

// Math.abs(num) will convert the num passed in to a positive int.
// Math.pow(10, i) will generate the correct place value for the 
//num in question. In the case above, the 100th's place in 7323 is 3
//so:

// Math.pow(10, 2) 
// => 
// 100

// Then, the num (that has been converted to a positive int with 
//Math.abs(num)) is divided by the the 100 representing the place 
//value:

// Math.abs(7323) / 100
// =>
// 73.23

// Then, get rid of the decimal:

// Math.floor(Math.abs(7323) / 100)
// =>
// 73

// All that is left to do now is take the number that is in the num
//that would have been in the 100th's place (3). The way to do that 
//is to find the modulo of 10:

// 73 % 10
// 3

// getDigit(12345, 1); // 4
// getDigit(12345, 2); // 3
// getDigit(12345, 3); // 2
// getDigit(12345, 4); // 1
// getDigit(12345, 5); // 0



//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
//***************************DIGIT COUNT***************************
//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*



// digitCount(num) - return the number of digits in num 

// digitCount(1); // 1
// digitCount(25); // 2
// digitCount(314); // 3

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// (Again, the Math.abs(num) is converting num to positive int)

// Starting with Math.log10(423). This is saying '10 to the what
//power is going to give us 423?' So:

// Math.log10(423)
// 2.6263403673750423

// Then, we remove the decimal:

// Math.floor(2.6263403673750423)
// =>
// 2

// And finally, add 1 to get the number of digits

// => 3


//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
//*****************************MOST DIGITS*************************
//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

// mostDigits(nums) - Given an array of numbers, returns the number
//of digits in the largest numbers in the list

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

// Initialize a holder variable to keep track of the largest num;
// Loop through the array of numbers and compare with Math.max()
    //Choose the larger of two nums:
    //Math.max(maxDigits, digitCount(nums[i]));
// Return the place holder variable

