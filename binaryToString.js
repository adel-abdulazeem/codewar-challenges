// str of binary which might be empty
// equivalent decoded text (the text is ASCII encoded) to that binary
// binaryToString('01100001'), 'a'
// 
function binaryToString(binary) {
    // conditional
    // declare a var of []
    // loop to reassign
  let arr = []
  if(binary.length){
    for(let i = 0; i < binary.length; i += 8){
      arr.push(binary.substr(i,8))
    }
    return arr.map(el => String.fromCharCode(parseInt(el, 2))).join('')
  }
  return ''
  }
  
  console.log(binaryToString('01001011010101000100100001011000010000100101100101000101'))