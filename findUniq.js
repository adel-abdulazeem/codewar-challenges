//P: arr of nums where all nums are equal except one, arr length <= 3
// return a num which is unique
//

function findUniq(arr) {
    //loop using filter method applying conditional that index of the el === arr.lastIndexOf(el)
  // join
  return Number(arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el)).join(''))
  }
  console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))