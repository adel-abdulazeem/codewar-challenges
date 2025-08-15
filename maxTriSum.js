//P: arr of num which may be -ve/+ve or contain duplicated nums
//R: num of the added 
//E: 
//P: 

function maxTriSum(numbers){
    //loop through el of the arr removing duplicate
    //sort ascendingly 
    //slice last 3 el using slice method with (-3)
    //finally reducing by summing the 3 val
    return numbers.filter((item,index,arr) => index == arr.indexOf(item)).sort((a,b) => a - b).slice(-3).reduce((acc,c) => acc + c)
  }
  console.log(maxTriSum([2,1,8,0,6,4,8,6,2,4]))