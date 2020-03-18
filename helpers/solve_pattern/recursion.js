//sum all positive integers inside an object with recursion

function nestedEvenSum (objeto) {
  // add whatever parameters you deem necessary - good luck!
  let sum = 0; 
  
  (function helper (obj) {
      for (let element in obj) {
          console.log(element, obj[element]);
          if (typeof obj[element] === 'object') helper(obj[element]);
          if (obj[element]%2 === 0) sum +=obj[element];
    }    
  })(objeto);
  
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

// nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10


//flaten an array with recursion

function flatten(arr){
  // add whatever parameters you deem necessary - good luck!
 let result = [];
 console.log(arr)
 function helper (new_arr) {
     console.log(new_arr)
    if (!new_arr.length) return;
     if (Array.isArray(new_arr[0])) {
        helper(new_arr[0]);
        return helper(new_arr.slice(1));
     } else {
        result = result.concat([new_arr[0]]);
        return helper(new_arr.slice(1)); 
     }
     
 }
 
 helper(arr);
 console.log(result)
 return result;
}


flatten([[1],[2],[3]]) // [1,2,3]

