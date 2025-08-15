function gordon(a){
    // delcare a var that holds a val of eiou
    //split the give str into arr of arr 
    //loop through each el adding !!!! to it and converting a/A into @ and vowel into *
    let vowel = 'aeiou'
    let arr = a.toLowerCase().split('')
     return arr.map( el => el == 'a'?'@': vowel.includes(el)? "*" : el ).join('').toUpperCase().split(' ').map(item => item + '!!!!').join(' ')
  }
  
  console.log(gordon('What feck damn cake'))