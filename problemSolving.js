// =================================================================
// Example 1: Write a function that takes in two numbers and returns their sum.
// =================================================================

// 1. Can I restate the problem in my own words?
"Impliment addition"
// 2. What are the inputs that go into this problem?
"Are these floating point numbers? Are the numbers."
"How large are these numbers going to be? JavaScript cannot handle very large numbers and will just return 'infinity' if the result exceeds its capability. In other languages, this might be better represented as a string."
"Is it always two inputs? What if someone leaves an input out?"
"What if someone wants to add 4-10 numbers together?"
"Is our function only going to work with two numbers?"
// 3. What are the outputs that should come from the solution of the problem?
"Should the output be a float or an integer? If two floats are passed in, do we want a float back?"
// 4. Can the outputs be determined from the inputs? Do I have enough information to solve the problem?
"What happens if someone only passes in one number? Do we default to zero? Do we return 'undefined' or 'null'?"
// 5. How should I label the important pieces of data that are part of the problem?
"We can name the function 'add' and the inputs 'num1' and 'num2'. 'Sum' is the answer that we can return."

// ============================================================================================
// // Example 2: Write a function that takes in a string and returns counts of each character in that string.
// ============================================================================================

"First, we want to restate the problem in our own words and really understand the problem. Use the instructions above and then proceed."

"Let's call our function 'charCount()' and give it an input and output:"

charCount('aaaa'); // {a:4}
charCount('hello'); // {h:1, e:1, l:2, o:1}

// What about the letters that aren't there? Do we want to have an output that looks like: 
//charCount('aaaa'); // {a:4, b:0, c:0, d:0, ...etc}

// What if someone gives us an input like:
charCount("my phonr number is 249842")
// What would we want the output to look like? Do we want to account for the spaces?
// What about other characters like ?$&# etc. 

charCount("Hello hi"); //Are we going to care capitalization?

charCount(''); // {} How do we handle an empty input? null, false, or undefined?
charCount(23); // How do we handle invalid inputs? 


// ===================================================
//  BREAK IT DOWN
// ===================================================
// We are going to start with defining the function and make some pseudo code comments
charCount(){
    //do something
    //return an object with keys that are lowercase alphanummeric characters in the string;
}

charCount(){
    //make object to return at the end 
    //loop over string, for each character...
    //if the char is a number/letter AND is a key in object, add one to count;
    //if the char is a number/letter AND not in object, add it to object and set value to 1;
    //if character is something else (space, period, etc.) don't do anything
    //return object at the end
}


// ===================================================
//  SOLVE/SIMPLIFY
// ===================================================  
// At this point, we might be ready to solveAt this point, we might be ready to solve the problem and if not, solve a simpler problem. Try to ignore the part that is giving you a really hard time in order to focus on everything else.  Why is it worth doing this?  Well, first of all, in an interview setting often you want to have something show for yourself. So instead of getting stuck on one difficult problem and making zero progress, it’s much better to do the stuff you know how to do. Secondly, it’s pretty common that in  simplifying a problem, you’ll gain insight into the actual solution.
charCount(str){
    //make object to return at the end 
    let result = {};
    //loop over string, for each character...
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        //if the char is a number/letter AND is a key in object, add one to count;
        if (result[char]) {
            result[char]++;
        }
        //if the char is a number/letter AND not in object, add it to object and set value to 1;
        else {
            result[char] = 1;
        }
        //if character is something else (space, period, etc.) don't do anything

        //return object at the end
        return result;

    }
}


// ===================================================
// LOOK BACK AND REFACTOR
// =================================================== 

