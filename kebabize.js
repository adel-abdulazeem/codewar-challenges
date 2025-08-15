// str of camel case
// str where words are separated and all letters are lower case
//  "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
//

function kebabize(str) {
    // split
    //loop 
    // conditional if it an upper case then convert it lower + "-"
    // join
    // slice to remove last dash
    let newStr = str.split('').filter(el => !Number(el && el === '0')).map(el => el === el.toUpperCase()? '-'  + el.toLowerCase(): el).join('')
    return newStr[0] === '-'? newStr.slice(1,newStr.length ) : newStr
  }
  
  console.log(kebabize('MyCamelHas0Humps'))
  