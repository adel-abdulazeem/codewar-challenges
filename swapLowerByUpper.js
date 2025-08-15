

//P: str of letters
//R: another str replacing lower case vowel into uppercase
//E:
//P: 


function swap (string) {
    let vowels = 'aeiou'
    return string.split('').map(item => vowels.includes(item)? item.toUpperCase() : item ).join('')
  }
  console.log(swap('Sunday ab'))