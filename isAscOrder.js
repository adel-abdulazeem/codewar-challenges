//P: arr of intg
//R: return true if it is ordered ascendingly otherwise false
//E: inAscOrder([1,2,4,7,19]); // returns true
//P:
function inAscOrder(arr) {
  //loop 
  //conditional
  for(let i = 0; i < arr.length ; i++) {
    if (arr[i] > arr[i+1]) {
      return false; 
    }
  }
  return true;
}
console.log(inAscOrder([1,60,10,18]))