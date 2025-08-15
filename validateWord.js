//P: s of letters numbers symbols
//R: boolean upon conditional
//E: 
//P: 
function validateWord(s)
{
    //declare a var and assign it s after being lowercased and splitted
    // conditional
let array = s.toLowerCase().split('')
  return array.filter((item,index,arr) => index == arr.lastIndexOf(item)) === s.array? true : s.length % array.filter((item,index,arr) => index == arr.lastIndexOf(item)).length == 0? true : false
}

console.log(validateWord("123abc!"))