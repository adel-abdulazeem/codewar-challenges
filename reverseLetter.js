//P: str of letters and nums
//R: str of just letters reversed comparing to the order of the given str
//E: str = "krishan", the output should be "nahsirk"
//P:


function reverseLetter(str) {  
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].join('')
  
    return str.split('').filter(el => alphabets.includes(el)).reverse().join('')
  }
  
  console.log(reverseLetter("ultr53o?n"))