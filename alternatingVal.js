//P: arr of unique el
//R: arr of num the 1st max followed by the 1st min
//E: solve([15,11,10,7,12]) = [15,7,12,10,11]
//P:

function solve(arr){

    //looop return [rest param.sort()map]
    return [...Array(arr.sort((a, b) => a - b).length)].map((_, idx) => idx % 2 ? arr.shift() : arr.pop());
  
  };
  
  console.log(solve([15,11,10,7,12]))