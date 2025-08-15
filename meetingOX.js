//P: arr of 'X' tht represent busy &  "O" represent empty
//R: 1st of "O" if it's found || 'None available!' if it's not
//E:
//P:


function meeting(x){
    //join el of x arr
    //apply includes method to determine if the joined el contain "O"
    //conditional to return 1st index of "O" if it's true 
    return x.join('').includes("O")? x.indexOf('O') : 'None available!'
  }
    console.log(meeting(['X', 'O', 'X',
  'O']))