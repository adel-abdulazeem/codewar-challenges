function scrollingText(text){
    //P: str
    //R: arr of str of all possible rotations 
    //E: 
    //P: declare var of [] loop then push the val of the slice text 
    
    let result = []
    
    for(let i = 0; i < text.length; i++){
      result.push(text.toUpperCase().slice(i) + text.toUpperCase().slice(0,i))
    }
    return result
  }