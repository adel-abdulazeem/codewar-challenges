
//a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

function arithmetic(a, b, operator){
    return operator == 'add'? a + b : 
            operator == 'subtract'? a - b : 
            operator == 'multiply'? a * b : a / b
  }