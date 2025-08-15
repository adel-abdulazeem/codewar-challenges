//P: arr of unique intg
//R: num that return difference bt consecutive nums from lowest to highest
//E: [4, 8, 6] --> 2
//P:
function consecutive(arr) {
    // decalare var of empty arr
    //sort the given arr
    //loop through the given arr pushing its el from start and keep reassigning by adding 1 every time we loop
    //pushing every reassigned el to the nums arr
    //conditional 
    let nums = []
    arr.sort((a,b) => a - b)
      for(let i = arr[0] -1; i < Math.max(...arr) ; i++){
        missNums.push( i + 1)
      }
      return arr.length == 0 || arr.length ==1? 0 : nums.length - arr.length
  }
  
  console.log(consecutive([-1,-5]))