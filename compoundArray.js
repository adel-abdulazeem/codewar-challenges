// 2params of arr of intgers of different length
// return a new arr of 2 the 2 arr combined 
// Input - {1,2,3,4,5,6} and {9,8,7,6} Output - {1,9,2,8,3,7,4,6,5,6}
//[11, 21, 12, 22, 23, 24]
function compoundArray(a, b) {
    //declare a var of []
    //loop to reassign the declared var pushing el altervatively from the given arrs
    //then filter to return truthy el
    let result = []
    for(let i = 0; i < Math.max(a.length, b.length); i++){
      result.push(a[i])
      result.push(b[i])
    }
    return result.filter(el => el)
  }
  
  console.log(compoundArray([11, 12], [21, 22, 23, 24]))