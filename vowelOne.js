

//P: str
//R: str of 1s and 0s
//E: 
//P:





function vowelOne(s){
    let vowels = 'aeiou'
    return s.toLowerCase().split('').map(item => vowels.includes(item)? '1' : '0').join('')
  }
  
  console.log(vowelOne('aeiou, abc'))