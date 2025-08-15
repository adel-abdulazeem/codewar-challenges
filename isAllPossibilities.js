//P: arr of intgers 
//R: true or false on the condition of, it the given arr contains all nums fron 0 to arr.length -1
//E: [0,1,2,2,3] => False


function isAllPossibilities(x){
    //loop  applying every method
  //conditional if the given arr contains all the number from 0 to arr.length -1
  let arr = x.sort((a,b) => a - b)
return arr.every((el,i) => el === i)
}
console.log(isAllPossibilities([0,1]))