// write that takes 2 params one is arr of str 2nd is a str of bin
//2 params, 1st is arr of str, 2nd is a str of bin, always valid
// str corresponding to the same str in the passed arr else return false
//


function decodePass( passArr, bin ){
    // split bin stry by ' ', loop through it converting bin into corresponding str, then looping through to return the corresponding el in the passArr or false
    //loop the passArr param
    const pass = bin.split(' ').map(el => String.fromCharCode(parseInt(el, 2))).join('')
    return passArr.find(el => el === pass) || false
  }

console.log(decodePass(['password123', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011'), 'password123'
)
console.log(decodePass(['password321', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011')//false
)
console.log(decodePass(['password456', 'pass1', 'test12'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011'))// false