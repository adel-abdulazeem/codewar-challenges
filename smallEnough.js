//You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

//P: 2 arg, a = arr/ limit = num
//R: true / false
//E: 
//P: 
function smallEnough(a, limit){

    //sort the arr in descending order
    //loop
    //conditional
    let arr = a.sort((a,b) => b - a)
    for(let i = 0; i < arr.length; i++){
      if(a[i] <= limit){
        return true
      }else{
        return false
      }
    }
     
   }
  
   console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))