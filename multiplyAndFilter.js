//P: 2 arg the 1st seq of val the 2nd is multiplier
//R: num after filtering all non-numeric val and multiplying the rest by multiplier
//E: multiplyAndFilter([1,2,3,4], 1.5), [1.5, 3, 4.5, 6]
//p: 
function multiplyAndFilter(array, multiplier){
    // filter the given arr returing only el of the type of 'number'
    //map through the filtered arr mulitplying each el with the multiplier
    return array.filter(el => typeof el == 'number').map(el => el * multiplier)
  }
  
  console.log(multiplyAndFilter([1,2,3,4], 1.5))