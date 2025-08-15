//P: arr of str of words
//R: each str within the sub arr transposed If one string is longer than the other, there should be a space where the character would be
//E: 
//P:
const transposeTwoStrings = arr => {
    const max = Math.max(arr[0].length, arr[1].length)
    let result = []
    
    for(let i = 0; i < max; i++){
      result.push(`${arr[0][i] || ' '} ${arr[1][i] || ' '}`)
    }
    
    return result
  }
  
  console.log(transposeTwoStrings(['Hello','World']))