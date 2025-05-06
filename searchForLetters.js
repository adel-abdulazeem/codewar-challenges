function change(string){
    //func takes a str => str with length = 26
    // str of char, lower || uppercase letters case insenitive || special char || nums
    // return str of either 0&1 with length of 26
    
    // declare a var of alphabets
    let alphabets = "abcdefghijklmnopqrstuvwxyz"
    // declare a var tht holds lowercase of str input
    let str = string.toLowerCase().split('').filter((el,i) => i === string.toLowerCase().indexOf(el))
    // declare res var of empty str
    let res = '00000000000000000000000000'.split('')
    
    // then loop for 26 time
    for(let i = 0; i < str.length; i++){
      //conditional to determine if alphabets includes(str[i]) then replace its corresponding index with 1

      if( alphabets.includes(str[i]) ){
        res[ alphabets.indexOf(str[i]) ] = '1'
      }
    }
    return res.join('')
  }

  console.log(change("aaaaaaa79345675" ))
  console.log(change("a   **&  cZ"))
  console.log(change("&%#*" ))
  console.log(change("a **&  bZ"))