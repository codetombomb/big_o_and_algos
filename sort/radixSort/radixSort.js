//                          RADIX SORT

// Time Complexity: O(nk) ---(n is the amount of nums to sort and k is 
//the length of the longest number)
// Space Complexity: O(n + k)

//---------------------------PSEUDO CODE---------------------------

// - Define a function that accepts a list of numbers 

// - Figure out how many digits that largest number has

// - Loop from k = 0 up to this largest number of digits

// - For each iteration of the loop:

// - Create buckets for each digit (0 to 9)

// - Place each number in the corresponding bucket based on its
//k'th digit

// - Replace our existing array with values in our buckets, 
//starting with 0 and going up to 9

// Return the list at the end


function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        //Create an array of 10 empty arrays
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            // Get the digit at the k'th place
            let digit = getDigit(nums[i], k);
            // Push the digit into the digitBuckets where its digit
            // matches
            digitBuckets[digit].push(nums[i]);
        }
        // Spread the contents of digitBuckets into an empty array
        console.log(digitBuckets)
        nums = [].concat(...digitBuckets);
        console.log(nums)
    }
    return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852])

// --*--*----*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*
// ************************** HELPER METHODS **************************
// --*--*----*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}


