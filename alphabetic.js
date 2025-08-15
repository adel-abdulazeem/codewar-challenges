// str of lowercased letters
// boolean 
// "asd" => false
//

function alphabetic(s) {
    // conditional to compare the input with the its sorted version
    return s == s.split('').sort().join('')
  }
  
  console.log(alphabetic('asd'))