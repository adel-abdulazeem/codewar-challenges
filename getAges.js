
//P: 2 params of nums, 1st represent sum of 2 num & 2nd respresent diff
//R: arr of 2 nums 
//E:(getAges(24,4) -> [14,10])
//P:


function getAges(sum,difference){
    //delcare 2 var of age1 to calcullate first val
    //age2 to calculate age2
    //declare var of result of []
    //push age1, age2 to the result arr
    //conditional to return result or null
    let age1 = (sum - difference)/2 + difference
    let age2 = (sum - difference)/2
    let result = []
     result.push(age1, age2)
    return sum > 0 && difference > 0 && age2 >= 0? result : null
  };