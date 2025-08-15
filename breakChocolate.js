//P: 2 param not equal or less than 0 
//R: 0 in case one of the param is <= 0 or a num as a product 
//E: 
//P: 




function breakChocolate(n,m) {
    //conditional 
    return n <= 0 || m <= 0 ? 0 : (n * m) - 1
  }