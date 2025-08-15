//func takes a str => new str in snake case format
// param: str, always valid, case sensitive separated by space || '-'
// new str in the form of snake case format, lowercased
// declare a var of res to store values for us

function SnakeCase(str) { 

    // declare res var 
    // loop 
    // conditional replacing el if === ' ' or '-'
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'
    
    // let res = ''
    // for(let i = 0; i < res.length; i++){
    //     if(!alphabets.includes(res[i])){
    //         res = "_"
    //     }
    //     else {
    //         res +=str[i].toLowerCase()
    //     }
    // }  
    //   return res
    return str.toLowerCase().split('').map(el => alphabets.includes(el)? el : '_' ).join('')
      }
    console.log(SnakeCase("BOB loves-coding$$war"))