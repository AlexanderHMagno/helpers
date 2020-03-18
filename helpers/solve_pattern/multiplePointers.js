// the key here is checquing in multiple places with only
//one loop why create a quadratic function if we
//only need to loop once??

function sumZero (arr) {
    let left = 0;
    let right = arr.length -1;

    while (left < right) {

        let sum = arr[left] + arr[right];
 
        if (sum === 0) {
            return [arr[left],arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left ++;
        }
    }
    return false;
}



function countUniqueValues(arr) {

    let first = 0; 
    let second = 1;
    let total = 0;
    while (second <= arr.length) {
        if (arr[first] != arr[second]) {
            total++;
            first = second;
        }
        second++ 
    }
   return total;
}


countUniqueValues([])
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])