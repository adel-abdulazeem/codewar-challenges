// func takes str of letters, nums and operator return the val nums after applying the contained operator 
// str of letters, nums +/- and 1 operator, 
// new str of calculated nums 
// Input: "gdfgdf234dg54gf*23oP42"  Output: "54929268" (because 23454*2342=54929268)
//

function calculateString(st){
    // decalare a var of '1234567890+-*/.'
    // declare a var of res = ''
    //loop returning only nums and valid operator
    // math.round on the val of eval method
    let oper = '1234567890+-*/.'
    let res = ''
    for(let i = 0; i < st.length; i++){
      if(oper.includes(st[i])){
        res += st[i]
      }
    }
    return Math.round(eval(res)).toString()
  }
  
  console.log(calculateString("gdfgdf234dg54gf*23oP42")) // 23454*2342=54929268