
//P: intger num
//R: sum of the digit
//E:
//P:

function sumDigits(number) {
    //return the absolute val of the given num 
    //convert it into a string 
    //split it 
    //then reduce bym summing each num after spliting 
    return Math.abs(number).toString().split('').reduce((acc,c) => Number(acc) + Number(c),0)
  }