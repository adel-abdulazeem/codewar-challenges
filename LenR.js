//func takes arr => num which the length of the arr 
// arr, maybe empty
// num 
// lenR([1,3]) // 2
function lenR(arr) {
    if (arr.length == 0) {
      return 0;
    }
    return 1 + lenR(arr.slice(1));
  }
  
  console.log(lenR([1,2,3,4,5]))
