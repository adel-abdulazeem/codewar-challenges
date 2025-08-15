// arr of nums 
// new sorted arr based on bits the num of on bits
//  sortByBit([7, 6, 15, 8]) // [8, 6, 7, 15]
//

function sortByBit(arr) {
    //declare a var 
    // map to return arr of sub arrs 
    // sort 
    arr.sort( (a,b) => a.toString(2).split`1`.length - b.toString(2).split`1`.length || a - b);
  
  }
  console.log(sortByBit([7, 6, 15, 8]))
  console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]))//  [1, 8, 3, 3, 5, 6, 9, 7]
  console.log('1000'.split('1').length)// arr of nums 
  // new sorted arr based on bits the num of on bits
  //  sortByBit([7, 6, 15, 8]) // [8, 6, 7, 15]
  //
  
  function sortByBit(arr) {
    //declare a var 
    // map to return arr of sub arrs 
    // sort 
    arr.sort( (a,b) => a.toString(2).split`1`.length - b.toString(2).split`1`.length || a - b);
  
  }
  console.log(sortByBit([7, 6, 15, 8]))
  console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]))//  [1, 8, 3, 3, 5, 6, 9, 7]
  console.log('1000'.split('1').length)