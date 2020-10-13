// This algorithm will only work on sorted data

// let states = ["Alaska","Alabama","Arkansas","American Samoa","Arizona",
// "California","Colorado","Connecticut", "District of Columbia","Delaware",
// "Florida","Georgia","Guam","Hawaii","Iowa","Idaho","Illinois","Indiana",
// "Kansas","Kentucky","Louisiana","Massachusetts","Maryland","Maine","Michigan",
// "Minnesota","Missouri","Mississippi","Montana","North Carolina","North Dakota",
// "Nebraska","New Hampshire","New Jersey","New Mexico","Nevada","New York","Ohio",
// "Oklahoma","Oregon","Pennsylvania","Puerto Rico","Rhode Island","South Carolina",
// "South Dakota","Tennessee","Texas","Utah","Virginia","Virgin Islands","Vermont",
// "Washington","Wisconsin","West Virginia","Wyoming"]


// function binarySearch(arr, elem){
//     let start = 0;
//     let end = arr.length - 1;
//     let middle = Math.floor((start + end) / 2)

//     while (arr[middle] !== elem && start <= end){
//         if(elem < arr[middle]){
//             end = middle - 1;
//         } else {
//             start = middle + 1;
//         }
//         middle = Math.floor((start + end) / 2)
//     }
//     if (arr[middle] === elem){
//         return middle;
//     }
//     return -1;                                                                                                                              
// }

function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

// binarySearch(states,"Texas")
binarySearch([2, 234, 4, 564, 7, 578, 67, 45, 34, 234, 5, 6, 9, 13, 15, 28, 50], 50)
