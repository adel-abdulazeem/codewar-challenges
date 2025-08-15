// str, lowercase, alpha only, no spaces
// num that represent the highest value consonant substr, their val set according their order in the alpha order
// 
function solve(s) {
    //declare a var of alphabetics
    // declare a var of count = 0
    //loop to reassign that var upon conditional
    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let vowel = 'aeiou'
    let val = 0
    let max = 0
    for(let i = 0; i < s.length; i++){
      if(vowel.includes(s[i])){
        val = 0
      } else {
        val += alpha.indexOf(s[i]) + 1;
        max = (val > max) ? val : max
      }
    }
    return max
  };
  
  
  console.log(solve("zodiacs"))
  console.log(solve("strength"))