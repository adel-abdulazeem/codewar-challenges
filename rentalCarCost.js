
// cal cost of renting a car for a num of days
//P: num of day
//R: num of cost 
//E: 
//P:

function rentalCarCost(d) {
    //conditional 
    //multiply then subtract
    return d >= 7 ? (d*40) - 50 : d >= 3 ? (d*40) - 20 : d * 40
  }
  
  console.log(rentalCarCost(8))