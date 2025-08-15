
//P: str featuring a cat "C" & mouse "m"
//R: str "Escaped" if there's > 3 char bt "C" & "m" || "Caught"
//E:
//P:


function catMouse(x){
    //conditional
    //calcaulated index difference bt the 2 char 
    return Math.abs(x.indexOf('C') - x.indexOf('m')) <= 4 ?  'Caught!' : 'Escaped!'
  }
  
  console.log(catMouse('C....m'))