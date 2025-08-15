//P: str of letters&length > 0
//R: another str by moving each letter by 10 position
//E: "testcase") -->"docdmkco"
//P:
function moveTen(s){
    //loop through the given str
    //conditional based on the charCodeAt method
    //then return the str based on the condition
   
    let ans = ''
    for(let i = 0; i < s.length; ++i){
      if(s[i].charCodeAt() + 10 > 'z'.charCodeAt()){
        ans += String.fromCharCode(s[i].charCodeAt() - 16)
      }else{
        ans += String.fromCharCode(s[i].charCodeAt() + 10)
      }
    }
    return ans
  }
  
  console.log(moveTen("p"))