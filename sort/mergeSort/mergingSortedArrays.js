//                                 MERGING TWO SORTED ARRAYS

// - Deifne a function which takes in two sorted arrays
// - Create an empty array that will be returned at the end , take a look at the smallest values in each input array
// - While there are still values we havent looked at...

    // - If the value in the first array is smaller than the value in the second array, 
    //push the value in the first array into our results and move on to the next value in the first array

    // - If the value in the first array is larger than the value in the second array, push the value in the 
    //second array into our results and move on to the next value in the second array

    // - Once we exhaust one array, push in all remaining values fron the other array into our results

   

    function merge (arr1, arr2){
        let results = [];
        let i = 0; 
        let j = 0;
        while (i < arr1.length && j < arr2.length){
            if (arr2[j] > arr1[i]){
                results.push(arr1[i]);
                i++;
            } else {
                results.push(arr2[j])
                j++;
            }
     
        }
        //Whatever is left in the arrays, push them into the results
        while (i < arr1.length){
            results.push(arr1[i])
            i++;
        }
        while (j < arr2.length){
            results.push(arr2[j])
            j++;
        }
     
        return results;
     }
     
     merge([1,10,50], [2,14,99,100])
     
     