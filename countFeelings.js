function countFeelings(string, array) {
    //func takes 2 params str of letters lowercase & arr of str// output num of how many el in the arr in the str
    // 2 params, 1st is str random letters lowercase, 2nd arr of words
    // num which is the count of how many arr el are included in the arr
    // countFeelings('abcdkasdfvkadf, ['desire', 'joy', 'shame', 'longing', 'fear'])// 0
    // declare a var of count
    // loop to reassign it based on conditional if(string.includes(arr[i])) count++
    let count = array.filter(el => el.split('').every(val =>string.includes(val))).length
    return count !== 1? `${count} feelings.` : `${count} feeling.` 
  }
  
  console.log(countFeelings('yliausoenvjw', ['anger', 'awe', 'joy', 'love', 'grief']))