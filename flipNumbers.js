//create a func that takes a str of nums from 1 - 1000 => reversed str twice
// str of intgers, always valid
// new str of rev str 


function flipNumber(s) {
// create a var tht holds an arr of input by spliting it
// create a var res of []
// loop through 
  let chars = s.split('')
  let res = []//
  while(chars.length){
    res.push(chars.reverse().shift())
  }
  return res.join('')
}
console.log(flipNumber('012345'))
