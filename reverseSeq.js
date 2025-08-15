//a function that reverse a sequence
const reverseSeq = n => {
    let arr = []
    for(let i = 1; i <= n; i++){
      arr.push(i)
    }
    return arr.sort((a,b) => b - a)
  };