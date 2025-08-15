// func that takes arr of nums => max num recursively
// arr of nums || [], 
// return a num or - infinity
// max([]), -Infinity
function max(arr) {
    if (!arr.length) 
      return -Infinity;
      
    if (arr.length === 1) 
      return arr[0];
    
    const [a, b] = [arr[0], max(arr.slice(1))];
    return a > b ? a : b
  }
  
  console.log(max.slice(1))
  /*
  function max([99,2,100,4,5]) {
    if (!arr.length) 
      return -Infinity;
      
    if (arr.length === 1) 
      return arr[0];
    
    const [a, b] = [9 , max(arr.slice(1))];
    return a > b ? a : b
  }
  */
  //[99, max([2, 100, 4, 5])]
  //[2, max([100, 4, 5])]
  //[100, max([4, 5])] 
  //[4, max([5])]
  // [4, 5] // 5