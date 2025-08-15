    // str
    // str of num where each num represent the position of the replaced letter in alphabet
    //
    function alphabetPosition(text) {
        // delcare a var of letter
        // declare a var res of []
        // loop to reassign the res 
        let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        let res = []
        let tex = text.split(' ').join('').toLowerCase()
        for(let i = 0; i < tex.length; i++){
          if(alphabets.includes(tex[i])){
            res.push(alphabets.indexOf(tex[i]) +1)
          }
        }
  
        return res.join(' ')
      }