function pivotHelper(arr, start=0, end=arr.length) {
    const swap = (arr,idx1,idx2) => {
        [arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    let pointer = start; i = start+1;
    while (i<=end) {
        if (arr[start]>arr[i]) {
            pointer++;
            swap(arr, pointer, i);
        } 
        i++;
    }
    swap(arr,start,pointer)
    return pointer;
}

function quickSort (arr, start=0, end=arr.length-1) {
    if (start < end) {
        let pointer = pivotHelper(arr,start,end);
        quickSort(arr,start, pointer-1);
        quickSort(arr,pointer+1, end);
    }
    return arr; 
}

console.log(quickSort([4,8,2,1,5,7,6,3]));