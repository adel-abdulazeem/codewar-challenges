// function takes a num, intger, always valid  => boolean if it's power of 2
//num, intger, always valid 
// boolean depending on if the num is a power of
// powerTwo(.16) // false // powerTwo(16) true

function powerTwo(num){
    // declare a var n to store the abs val of input to handle -ve inputs
    //
let n = Math.abs(num)
if(n === 1) return true // base case 
else if(n == 0 || n % 2 !== 0) return false 
return powerTwo(n/2) // recursive case 
}


console.log(powerTwo(100))