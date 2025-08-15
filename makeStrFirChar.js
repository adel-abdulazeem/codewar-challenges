//P: str, only letters, & spaces with exactly 1 space bt words & No leading or trailing
//R: str of the 1st char of each word within the passed str
//E: "This Is A Test" ==> "TIAT"
//P:

function makeString(s){
    // split the given string by spaces getting an arr of words
    //loop through the resulted arr return the 1st char of each el by using el[0]
    //join the resulted arr of the letters which represent the first char of each word 
    return s.split(' ').map((el,i) => el[0]).join('')
  }
  
  console.log(makeString("This Is A Test"))