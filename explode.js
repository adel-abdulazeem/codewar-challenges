



//P: string of nums
//R: str of nums where each num is repeated for certain times equals to its val
//E:
//P:



function explode(s) {
    //split the string
    //loop through each el applying repeat method 
    return s.split('').map(item => item.repeat(Number(item))).join('')
  }
  
  console.log(explode('102269'))