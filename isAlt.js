// str of word
// boolean if the str arg contains vowel and constants letters alternatively
// isAlt("amazon") // true
// 

function isAlt(word) {
    // decalre var of vowels
    // declare a var of last char of word arg
    // loop 
    // conditional
    for (let x = 1; x < word.length; x++) {
      if ("aeiou".includes(word[x]) === "aeiou".includes(word[x - 1])) {
        return false;
      }
    }
    return true;
  }
  console.log(isAlt('amazon'))
  console.log(isAlt('banana'))
  console.log(isAlt("apple"))
  
  