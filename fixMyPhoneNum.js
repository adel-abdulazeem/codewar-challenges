  //func takes str that contains numbers and other char || just num 
  //should return str of valid phone || 'Not a phone number'
  // valid phone num starts with 0 and 11 digits
  // str of just nums or nums with other char, always str, always valid
  // return str extracted valid phone num or 'Not a phone number'

function isItANum(str) {
// declare a var arr that hold filtered num
let num = '0123456789'
let res = str.split('').filter(el => num.includes(el)).join('')
return Number(res) && res.length === 11 && res[0] == '0'? res : "Not a phone number"
  
}

console.log(isItANum("S:)0207ERGQREG88349F82!efRF)"), "02078834982")
// console.log(isItANum("sjfniebienvr12312312312ehfWh"), "Not a phone number")
// console.log(isItANum("0192387415456"), "Not a phone number")
// console.log(isItANum("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165"), "02084564165")
// console.log()