function mergeSortedArray (arr1,arr2) {

    let new_arr = [];
    let short,long,min,max;
    if (arr1.length > arr2.length) {
        short = arr2;
        long = arr1;
    } else {
        short = arr1;
        long = arr2;
    }

    min = Math.min(arr1.length, arr2.length);
    max = Math.max(arr1.length, arr2.length);
    let left = 0;
    let right = 0;

    while (long < max) {
        if (short[left] > long[right]) {
            new_arr.push(long[right]);
            right++
        } else {
            new_arr.push(short[left])
            left++
            if (left===min) break;
        }
    }
    
    let remaining = arr2.slice(min).concat(arr1.slice(min));
    
    consolelog(remaining,new_arr)
   
}

// // Merges two already sorted arrays
// function mergeSortedArray(arr1, arr2){
//     let results = [];
//     let i = 0;
//     let j = 0;
//     while(i < arr1.length && j < arr2.length){
//         if(arr2[j] > arr1[i]){
//             results.push(arr1[i]);
//             i++;
//         } else {
//             results.push(arr2[j])
//             j++;
//         }
//     }
//     while(i < arr1.length) {
//         results.push(arr1[i])
//         i++;
//     }
//     while(j < arr2.length) {
//         results.push(arr2[j])
//         j++;
//     }
//     return results;
// }


               


function mergeSortRecursion(arr) {
//     console.log(arr);
    if (arr.length <= 1) return arr;
    
    let middle = Math.floor((arr.length)/2);
    let first = arr.slice(0,middle);
    let second = arr.slice(middle);

    let first_arr, second_arr;

    first_arr = mergeSortRecursion(first);
    second_arr = mergeSortRecursion(second);
    console.log(first_arr,second_arr)
    return mergeSortedArray(first_arr,second_arr);
}

console.log(mergeSortedArray([7,9,8,10],[6,8]))
// console.log(mergeSortRecursion([9,8,6,3,10,20,20,32,23,45,67,100]));