//                     Frequency Counter Pattern


// This pattern uses objects or sets to 
// collect values/frequencies of values 

// This can often avoid the need for 
// nested loops of O(n^2) operations 
// with arrays / strings

// AN EXAMPLE 
// Write a function called same, which accepts two arrays. 
// The function should return true if every value in the 
// array has it’s corresponding value squared in the second 
// array. The frequency of values must be the same.


// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formend by rearranging the letters of another, such as cinema, formed from iceman

validAnagram('', '') // True
validAnagram('aaz', 'zza') // False
validAnagram('anagram', 'nagaram') // True
validAnagram('rat', 'car') // False 
validAnagram('awesome', 'awesom') // False
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // False


// You may assume the string contains only lowercase alphabets. 


// // My solution
// function validAnagram(str1, str2) {
//     if (str1 === str2) {
//         return true;
//     }
//     let frequencyCounter1 = {};
//     let frequencyCounter2 = {};

//     // loop over first string and tally up the characters 

//     //SKIP: verify if char is alphanumeric
//     for (let char of str1) {
//         char = char.toLowerCase();
//         frequencyCounter1[char] = ++frequencyCounter1[char] || 1;
//         //         console.log(frequencyCounter1)   
//     }

//     for (let char of str2) {
//         char = char.toLowerCase();
//         frequencyCounter2[char] = ++frequencyCounter2[char] || 1;
//         //         console.log(frequencyCounter2)   
//     }
//     for (let key in frequencyCounter1) {
//         if (!frequencyCounter2[key]) {
//             return false;
//         }
//         if (frequencyCounter1[key] !== frequencyCounter2[key]) {
//             return false;
//         }
//         //     debugger;

//     }
//     return true;
// }

// validAnagram("Hello", "olleh")



// INSTRUCTOR SOLUTION

function validAnagram(first, second) {
    // compare the length of the first and second string and return false if they do not match
    if (first.length !== second.length) {
        return false;
    }

    // create an object to tally up the first string's characters
    const lookup = {};

    // Tally the first string's characters and store them in the lookup variable
    for (let i = 0; i < first.length; i++) {
        // create a variable to hold the current letter we are on in the first string
        let letter = first[i]
        // If the letter exists in the lookup object, add one to the tally of that character.
        // else, set the character count to one in the lookup object.
        for (let i = 0; i < first.length; i++) {
            lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
        }
        // Loop over the second array and if the current letter is NOT in the lookup object, return false.
        // else subtract one from the character count 
        for (let i = 0; i < second.length; i++) {
            let letter = second[i]
            if (!lookup[letter]) {
                return false;
            } else {
                lookup[letter] -= 1;
            }
        }
    }
    return true;
}

