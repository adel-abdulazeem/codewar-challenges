function covfefe(str){
    //P: str
    //R: covfefe replace any occurence of coverage or if it's not found add covfefe to the given str
    //E:
    //P: check if input contains "coverage" and if it's true replace it with covfefe
    //otherwise add covfefe to the given str
    //conditional using include method then returning upon the eval of the condition
    
  return str.includes('coverage') ? str.split(' ').map(el => el.replace('coverage', 'covfefe')).join(' ') : `${str}covfefe`
    
  }
  
  console.log(covfefe("coverage coverage"))