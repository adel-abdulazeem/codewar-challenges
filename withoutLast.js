//P: arr of num
//R: new arr with same el of the given arr except without the last el
//E: 
//P:

function withoutLast(arr) {
    //apply slice method from 0 index to the last index 
    //el at 0 index is inclusive and the last el is exclusive
    // Fix it
    return arr.slice(0,arr.length - 1)
  }