function solution(digits){
    let res = 0
    for(let i = 0; i < digits.length; i++){
      let num = digits.substr(i, 5)
      if(Number(num) > res){
        res = Number(num)
      }
    }
  
    return res
  }
  
  console.log(solution(283910))
  console.log(solution(1234567890))