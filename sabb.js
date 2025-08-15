//P: 3 params s=str, val=her happiness level at the time of asking
//R: "Sabbatical! Boom!" if sum of the 3params is > 22 otherwise return 'Back to your desk, boy.'
//E: ('Can I have a sabbatical?', 5, 5), 'Sabbatical! Boom!'
//P:

function sabb(s, val, happiness){
    //declare a var that holds the num of letters the includes letters of word sabbatical, by spliting then joining then spliting then filtering upon the given condition
    //declare a var that holds sum of the 3 params
    //conditional 
  let lettersNum = s.toLowerCase().split(' ').join('').split('').filter(el=> 'sabbatical'.includes(el)).length
  let sum = lettersNum + val + happiness
  return sum > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'
  }
  
  console.log(sabb('Can I have a sabbatical?', 5, 5))