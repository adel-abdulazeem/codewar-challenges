//P: str 
//R: returned str of a&b switched positions
//E: 
//P:
function switcheroo(x){
    //split 
    //loop through each item
    //conditional 
    //join the resulted arr
    return x.split('').map(item => item == 'a'? 'b' : item == 'b'? 'a' : item).join('')
  }
  console.log(switcheroo('aabacbaa'))