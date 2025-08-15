// num, +ve
// boolean 
// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
//

function narcissistic(value) {
    // declare a var
    //stringfy
    //loop, reduce 
    // conditioal 
    let power = value.toString().split('').length
    let armStrng = value.toString().split('').reduce((acc,c) => acc + Math.pow(Number(c), power), 0)
    return armStrng === value
  
  }
  console.log(narcissistic( 153))

