//P: str of dots operator dots separatedby by ' '
//R: str of dots as many as the equation returns if the result is 0 return ''
//E: * "..... + ..............." => "...................."
//P:
function dotCalculator (equation) {
    //split the given stry by ' '
    //declare a var of []
    //decaler a var of '.'
    //loop 
    //each el length 
    //conditional if the 2nd el is + || - || * || //
    //then calculated the result dot multiplied by product of the each el length according to the operation
    let arr = equation.split(' ')
    let dotNum = []
    let result = '.'
    for(let i = 0 ; i < arr.length; i++){
        arr[1] == '+'? dotNum.push(arr[0].length + arr[2].length) : 
        arr[1] == '-'? dotNum.push(arr[0].length - arr[2].length) :    
        arr[1] == '*'? dotNum.push(arr[0].length * arr[2].length) :  dotNum.push(arr[0].length / arr[2].length)  
    }
    return equation.length > 0? result.repeat(dotNum[0]) : ''
  }
  
  console.log(dotCalculator("..... + ..............."))