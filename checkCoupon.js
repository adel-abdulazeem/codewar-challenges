//P: 4 params 1st 2 for the code 2nd 2 for date
//R: true or false if the 2 codes matches and date of the day not after the exp
//E: checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
//P:

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    //conditionals first for matching the enterecode with correct one
    //apply Date.parse static method parses a string represetation of date and returns date's timestamp
    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
  }
  console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'))