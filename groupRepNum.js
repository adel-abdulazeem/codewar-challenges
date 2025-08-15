// arr nums, maybe repeated
// arr  of arrs of similar nums and unique
//group([3, 2, 6, 2, 1, 3]) >>> [[3, 3], [2, 2], [6], [1]]
//
function group(arr) {
    // delcare a var of []
    // loop
    // conditional to reassigned the declared var
    var result = [];
    while(arr.length > 0)
    {
      result.push(arr.filter(a => a == arr[0]));
      // [].push([1])
      arr = arr.filter(a => a != arr[0]);    
    }
    return result;
     }
    
    
    console.log(group([1, 100, 4, 2, 4]))