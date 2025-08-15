
//P: str of letters which may be upper/lowe case
//R: new str where all letters are upper/lower case
//E: 
//P:
function solve(s){
    //declare 2 var spliting the param into arr of letters
    //filtering the arr into lower/ upper letters for each var
    //conditional upon var length
    let upper = s.split('').filter(item => item == item.toUpperCase())
    let lower = s.split('').filter(item => item == item.toLowerCase())
    return upper.length <= lower.length? s.toLowerCase() :
      s.toUpperCase() 
  }
  
  console.log(solve('coDe'))
  