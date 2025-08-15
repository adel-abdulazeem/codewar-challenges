// str, words, 1st char UpperCased, multiple spaces, leading/trailing
// new str, cased reversed, 
// "Example Input" ==> "iNPUT eXAMPLE"
//

function stringTransformer(str) {
    // split, condtional based on case 
    return str.split('').map((el,i) => el.toUpperCase() === str[i]? el.toLowerCase() : el.toLowerCase() === str[i]? el.toUpperCase() : el).join('').split(' ').reverse().join(' ')
  }
  
  console.log(stringTransformer("Example Input"))