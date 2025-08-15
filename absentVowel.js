//P: str of words 
//R: index of missed vowel 
//E: "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
//P
//declare a var that holds a str of vowesl with alphabetic order 
// declare anothe rvar that holds the filtered vowels of the given str
//return the missing vowel

function absentVowel(x){
    const vowels = 'aeiou'
     let exVo = x.split(' ').join('').split('').filter((item,index,arr) => vowels.includes(item)).join('')
    return vowels.indexOf(vowels.split('').filter(item => !exVo.includes(item)).join(''))
  }
  
  console.log(absentVowel("John Doe hs seven red pples under his bsket"  ))