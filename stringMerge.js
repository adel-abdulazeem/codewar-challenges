//P: 3 param str
//R: new str from the 1st param
//E:
//P:



function stringMerge(string1, string2, letter){
    //slice 
    //concatenate
    let newStr = string1.slice(0,string1.indexOf(letter))
    let newStr2 = string2.slice(string2.indexOf(letter))
    return newStr.concat(newStr2)
  }
  
  console.log(stringMerge("hello", "world", "l"))