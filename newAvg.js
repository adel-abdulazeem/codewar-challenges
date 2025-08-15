// list of intg & num which represent the average that should be reached 
// num that represent the value that should be added to so we could acheive the target avg
//dons = [14, 30, 5, 7, 9, 11, 15] then new_avg(dons, 30) --> 149
//
// (given arr length + 1 ) *  given avg == total 
// subracting the the sum of given list from total will give us the value of that if added to sum will give us the targt avg
//conditional
function newAvg(arr, newavg) {
    let total = (arr.length + 1) * newavg
    let arrSum = arr.reduce((acc,c) => acc + c,0)
    let result =  Math.ceil(total - arrSum) 
      if (result > 0) return result; else throw ('Expected New Average is too low');
    }
  
  console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 2))