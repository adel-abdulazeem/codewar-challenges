//P: 3 params 
//R: str of num represent the val of each we reassign the initial val
//E:
//P:




function arithmeticSequenceElements(a, d, n) {
    //declare a var of an arr of the initial val
    //declare a var of num of the initial val tht will be reassigned each time we loop
    //loop and push every time we loop the val of the reassigned var
    // return the resulted arr of pushing then join its el with quotes and separted by , and space
    let arr = [a]
    let num = a
    for(let i = 1; i < n; i++){
      arr.push(num += d)
    }
    return arr.join(', ')
  }