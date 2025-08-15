//P: arr of nums
//R: new arr from the given filtered out from inclusion the applying the passed predicate function
//E: reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)  =>  [1, 3, 5]
//P:

function reject(array, predicate) {
    //loop filtering the given arr
    //by not including the the result of the passed predicaate func passing to it each el within the given array
    return array.filter(el => !predicate(el))
  }

  