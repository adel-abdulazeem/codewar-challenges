//P: str / X don't count as an occurence of "x"
//R: true or false based on if the 1s "x" is followed by "xx" otherwise false
//E: "xoxotrololololololoxxx" → false
//P:

const tripleX = str => { 
    //var that holds the val of the index of x
    //conditional if the index of 'x' is > -1 and at the same time === to the indexOf('xxx')
    let x = str.indexOf('x')
    return x > -1 && x === str.indexOf('xxx') 
  }
  console.log(tripleX("rrxxx"))
  //I wanna know if the 1st occurence of "x" is followed by "xx" then we can filter returning just 