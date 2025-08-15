// str, 
// object of key value pairs indicating how many times each char found in the str
// aba => {'a': 2, 'b': 1}.
//
function count(string) {
    // declare a var of {}
    // loop 
    // nested loop & declare a var of count = 0
    // conditional within nested loop to reassign both obj anc count
    let res = {}
    for(let i = 0; i < string.length; i++){
      let count = 0
      for(let j = 0; j < string.length; j++){
        if(string[i] === string[j]){
          count++
          res[string[i]]  = count
        }
      }
    }
    return res
  }
  
  console.log(count('aba'))