// - The built in JavaScript sort method accepts an optional comparator function 
// - You can use this comparator function to tell JavaScript how you want it to sort    
// - The comparator looks at pairs of elements (a and b), determines their sort order based on the return value
//- If it returns a negative number, a should come before b 
//- If if returns a positive number, a should come after b
//- If it returns 0, a and b are the sasme as far as the sort is concerned 


function numberCompare(num1, num2) {
    //     return num1 - num2;
    return num2 - num1;
}

[6, 4, 15, 10].sort(numberCompare);
        // [ 4, 6, 10, 15]