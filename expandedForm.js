//num 
//str 
//expandedForm(70304); // Should return '70000 + 300 + 4'
//
function expandedForm(num) {
    // declare a var of []
    // stringify the num 
    //split it 
    // loop 
    // conditional
    // padEnd 
    let str = String(num)
    let result = []
    for(let i = 0; i < str.length; i++){
    
  
      if(str[i] !== '0'){
        result.push(str[i] + '0'.repeat(str.length - i -1))
      }
    }
    return result.join(' + ')
  }
  
  console.log(expandedForm(52))// '400000000 + 20000000 + 300000 + 70000…'