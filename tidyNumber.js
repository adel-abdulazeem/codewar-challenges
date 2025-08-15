//P: num intger
//R: true or false
//E:
//P:
function tidyNumber(n){
    //conditional
    //check if the given num is sorted or not
    return n == String(n).split('').map(item => Number(item)).sort((a,b) => a - b).join('')
  }
  
  console.log(tidyNumber(12))