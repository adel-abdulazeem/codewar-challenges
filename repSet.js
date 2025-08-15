function repSet(n) {
    // func an arr as a param, this arr might be arr of sub arr, empty => 'n= num of nested empty arr'
    // arr of nested empty arr of multiple levels
    // return `n=${count}` which str that display that count of nested arr
    // 
    if(n == 0){
      return []
    }
    let prev = repSet(n-1)
    return [...prev, prev]
  }
  console.log(repSet(3))