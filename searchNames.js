
// func takes arr of subArr each sub arr contains 2 el name&email => arr of subArr that include an name ends with '_' 
// arr of subArr each subArr contains 2 elements name and email and the name may contains "_" at end
// arr of subArr that its name el contains '_' at the end
// loop using map then passing a callback with filter method to return only the subArr if the name contains '_'
function searchNames( logins ){
    return logins.filter(el => el[0].lastIndexOf('_') === (el[0].length -1))
  }