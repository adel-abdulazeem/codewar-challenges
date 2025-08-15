// str of words, space, punc
// new str where letters rearranged alphabetically, punc, spaced are removed
// alphabetized("The Holy Bible") // "BbeehHilloTy"
function alphabetized(s) {
    // delcare 2 var of alphabetics both lower and upper cased are separated
    // declare var of where the input str is filtered out from punc and whiltespaced
    //the sort 
    let lowerAlpha = 'abcdefghijklmnopqrstuvwxyz'
    let upperAlpha = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
    let arr =  s.split('').filter(el => upperAlpha.includes(el) || lowerAlpha.includes(el) ).map((el,i) => [el, el.toLowerCase().charCodeAt()] )
  return arr.sort((a,b) => a[1] - b[1]).map(el => el[0]).join('')
  }
  
  
  
  console.log(alphabetized("The Holy Bible"))