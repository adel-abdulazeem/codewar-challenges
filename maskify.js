


//P? str > 4 or < 4
//R: replace each char by '#' except last 4 char should stay the same
//E: 
//P: 
function maskify(cc) {
    //slice last 4 char of cc str u
    //apply padStart method with target length of the same length of the given str
    return cc.slice(-4).padStart(cc.length,'#')
  }
  
  console.log(maskify('4556364607935616'))

  console.log('4556364607935616'.slice(-4))
