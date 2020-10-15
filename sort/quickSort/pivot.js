//                  PIVOT HELPER FOR QUICK SORT

// The pivot, or partition, is a one of the core features of the quick 
//sort algorithm. It will take an element (in this case it will be the 
//first element) and find all of the elements that are less than its 
//value. 

// - Given an array, this helper function should designate an element as
//the 'pivot'

// - It should then rearrange elements in the array so that all values
//less than the pivot art moved to the left of the pivot, and all values
//greater than the pivot are moved to the right of the pivot.

// - The order of elements on either side of the pivot doesn't matter

// - The helper should do this IN PLACE, that is, it should not create a
//new array

// - When complete, the helper should return the index of the pivot


// PICKING A PIVOT 
// - The runtime of quick sort does depend in part on how one selects the
//pivot. 

// - Ideally, the pivot should be chosen so that it's roughly the median 
//value in the data set you're sorting.

// PIVOT HELPER EXAMPLE 
let arr = [5, 2, 1, 8, 4, 7, 6, 3]
pivot(arr); // 4;

arr;
// any one of these mutations is acceptable:
// [2, 1, 4, 3, 5, 8, 7, 6]
// [1, 4, 3, 2, 5, 7, 6, 8]
// [3, 2, 1, 4, 5, 7, 6, 8]
// [4, 1, 2, 3, 5, 6, 8, 7]
// there are other acceptable mutations


// PIVOT PSEUDO CODE

// - It will help to accept 3 arguments: an array, a start index, and
//an end index(these can default to 0 and the array length minus 1, respectively)

// - Grab the pivot from the start of the array

// - Store the current pivot index in a variable (this will keep track of 
//where the pivot should end up)

// - Loop through the array from the start until the end 
//-----  If the pivot is greater than the current element, increment the
//-----pivot index variable and then swap the current element with the 
//-----element at the pivot index
// - Swap the starting element (i.e.the pivot) with tthe pivot index
// - Return the pivot index

function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let swapIdx = start;

    function swap(arr, index1, index2) {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
    }

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, i, swapIdx)
            //             console.log(arr)
        }
    }
    swap(arr, start, swapIdx)
    //     console.log(arr)
    return swapIdx;
}

pivot([4, 8, 2, 1, 5, 7, 6, 3])

pivot([4, 8, 2, 1, 5, 7, 6, 3])












function pivot(arr) {
    let i = 0;
    let pivot = arr[i];

    while (i < arr.length) {
        if (arr[i])
    }
}

