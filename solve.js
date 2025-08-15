//In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

//P: arr of nums which may be +ve/-ve
//R: num that is exist in the +ve format
//E: 
//P

function solve(arr){
    //filter arr to remove the duplicated val
    //reduce to return that num
    return arr.filter((item,index,a) => index == a.lastIndexOf(item)).reduce((acc,c) => acc + c)
  };
  
  console.log(solve([1,-1,2,-2,3,3]))