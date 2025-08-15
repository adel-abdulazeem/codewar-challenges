//P: number intg, +ve
//R: boolean
//E: 
//P:





function isLeapYear(year) {
    //conditional 
    //logical operator && / ||
    return year % 100 !== 0 && year % 4 == 0 || year % 400 == 0 ? true : false
  }