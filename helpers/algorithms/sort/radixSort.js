function getdigit (num, place) {
    num+= '';
    return num[num.length -1 -place];
//math way to get a digit
    return Math.floor(Math.abs(num)/ Math.pow(10,place)) % 10;
}

function digitCount (num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}


function mostDigits (arr) {
    let long = arr.length;
    let great = 0;
    for (let i = 0 ; i < long ; i ++ ) {
        great = great < digitCount(arr[i]) ? digitCount(arr[i]):great;
    }

    return great;
}


console.log(mostDigits([123,1111,222222]));