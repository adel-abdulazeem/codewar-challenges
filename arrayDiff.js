//2 arr of nums
// new arr without including the elements in the 2nd arr
//arrayDiff([1,2,2,2,3],[2]) == [1,3]
//
function arrayDiff(a, b) {
    //loop filtering a elements out from b elements applying conditional
    return a.filter(x => !b.includes(x))
  }
  
  console.log(arrayDiff([1,2,2,2,3],[2]))