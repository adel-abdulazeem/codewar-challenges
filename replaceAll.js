//P: 3params 1st is arr, 2nd is num that we should find, 3rd represent the val of the will replace val of find
//R: new arr
//E:[1,2,2], 1, 2), [2,2,2]
//P:

function replaceAll(seq, find, replace) {
    //loop
    //replace method
    return Array.isArray(seq) ? seq.map(x=>x==find?replace:x) : seq.split(find).join(replace)
  }
  
  console.log(replaceAll('123', 1, 2))