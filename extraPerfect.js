//P: +ve intg N
//R: from 1 to N in the for [] ascending order 
//E: extraPerfect(3)  ==>  return {1,3}
//P:
function extraPerfect(n){
    //declare 2 var
    //loop 
    //conditional 
    let num = 1;
    let result = []
    for(let i = num; i <= n; i++){
      if( i % 2 !== 0){
        result.push(i)
      }
    }
    return result
  }
  
  console.log(extraPerfect(28))