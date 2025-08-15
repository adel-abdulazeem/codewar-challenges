//P: arr of num from 0 to 9 is inclusive, intg el
//R: the missing num that's not found within the given arr
//E: [0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
//P:


function getMissingElement(superImportantArray){
    //TODO
    //delcare a var of arr  nums 0 to 9
    //loop through arr using filter method
  //return the num that the given arr missing comparing to the nums arr
    let nums = [0,1,2,3,4,5,6,7,8,9]
    return nums.filter(item => !superImportantArray.includes(item))[0]
  }
  
  console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]))