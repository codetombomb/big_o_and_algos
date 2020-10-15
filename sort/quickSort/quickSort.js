//                          QUICK SORT
// time complexity: O - O(n^2)        space complexity: O(log n)
//       Big Omega: O(n log n)
//       Big Theta: O(n log n)

// - Like merge sort, exploits the fact that arrays of 0 or 1 elements 
//are always sorted.

// - Works by selecting one element (called the 'pivot') and finding
//the index wehre the pivot should end up in the sorted array.

// - Once the pivot is positioned appropriately, quick sort can be 
//applied on either side of the pivot.


//                          PSEUDO CODE 

// - Call the pivot helper on the array

// - When the helper returns to you the updated pivot index, recursively
//call the pivot helper on the subarray to the left of that index, and
//the subarray to the right of that index

// - Your base case occurs when you consider a subarray with less than 
//two elements 


function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    //We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    //Swap the pivot from the start to the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
}


function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        //Left side 
        quickSort(arr, left, pivotIndex - 1);
        //Right side
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}


quickSort([4, 6, 9, 1, 2, 5, 3])