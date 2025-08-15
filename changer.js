//function that takes str of letters and other char, replace every letter with the char after
  // make vowel Uppercase and consonants lowercase, alpha wrp
  // str of letters and other char, valid.
  // new str where every letter replaced with the one comes after vowel => upper, consonant => lower
  //Cat30 --> Dbu30 --> dbU30
  // declare a var of vowels 
  // then split and loop through each el
  // conditional to handle upper and lower case
  // string.fromCharCodeAt(el.charCodeAt() + 1)
  function changer(str) { 
    let vowels = 'aeiou'
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let string = str.toLowerCase()
    let res = []
    for(let i = 0; i < str.length; i++){
      if(string[i] === 'z'){
        res.push('A')
      } else if(alpha.includes(string[i])){
        res.push(String.fromCharCode(string[i].charCodeAt() + 1))
      }else{
        res.push(str[i])
      }
    }
    return res.map(el => vowels.includes(el) ? el.toUpperCase() : el).join('')
    }
    
    console.log(changer("Cat30" ))