//P: str of letters
//R: num upon performing some calc
//E:
//P:
//split the param then map through each el return the charCode
//then join the el of the arr
//then split each el individually 
//then map through each el converting it into an intger
//then filter if it contains 7 


function calc(x){
    return x
      .split('')
      .map(c => c.charCodeAt(0))
      .join('')
      .split('')
      .map(Number)
      .filter(x => x === 7)
      .length * 6
  }
  
  
   console.log( calc('aaaaaddddr'))