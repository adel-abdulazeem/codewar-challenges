//P: 2 params arr of nums and limit which  is a number
//R: boolean based on tht all the nums inside the arr are <= limit
//E:smallEnough([66, 101], 200), true
//P:
function smallEnough(a, limit){
    //get the max num of the arr then compare it if it is <= to the limit
  return Math.max(...a) <= limit
  }
  
  console.log(smallEnough([101, 45, 75, 105, 99, 107], 107))