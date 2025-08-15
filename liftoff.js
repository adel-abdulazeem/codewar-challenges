function liftoff(instructions){
    //P: arr of nums
    //R: str of nums ordered descendingly with word liftoff! at the end of the str
    //E:
    //P:
    //sort the given of nums descendingly 
    //push to it a str of the word 'liftoff!'
    //loop through the arr and convert every num into str then join it
    let arr = instructions.sort((a,b) => b - a).map(el =>String(el)).concat(['liftoff!'])
    return arr.join(' ')
  }
  
  console.log(liftoff([8,1,10,2,7,9,6,3,4,5]))