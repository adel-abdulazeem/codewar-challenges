// arr of str el, consec letters, valid, one letter missing,length >=2, letter are only in one case
// str which is missing in input
// ['a','b','c','d','f'] -> 'e'
//
function findMissingLetter(array){
    // declare a var of alphabets
    // loop to find the missing the letter
    // returns the first single el when condition evaluates to true
  
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'
    return array[0] == array[0].toLowerCase()?  alphabets.slice(alphabets.indexOf(array[0].toLowerCase())).split('').find((el,i) => !array.includes(el)) :
    alphabets.slice(alphabets.indexOf(array[0].toLowerCase())).toUpperCase().split('').find((el,i) => !array.includes(el))
  }
  console.log(findMissingLetter(['a','b','c','d','f']))
  console.log(findMissingLetter(['O','Q','R','S']))
