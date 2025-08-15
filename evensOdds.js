// num
// depending on conditional if even return binary , else return to hex
// 		doTest(47,'2f');
// 

function evensAndOdds(num){
    //conditional
    //if even return binary
    //if odd return hex
    return num % 2 === 0 ? num.toString(2) : num.toString(16)
  }
  
  console.log(evensAndOdds(2))