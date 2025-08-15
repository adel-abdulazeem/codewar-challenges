function containAllRots(strng, arr) {
    // loop through the arr
    // while looping creating new version rotated of the given str
    // conditional to determine if the arr constains the rotated value of the given str
    // indexOf( strng.slice(i) + strng.slice(0,i) === -1)
  
      
    for(let i = 0; i < strng.length; i++){
      if( arr.indexOf( strng.slice(i) + strng.slice(0,i) ) == -1){
        return false
      }
    }
    return true
    
  }