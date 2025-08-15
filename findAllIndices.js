const findAll = (array, n) => {
    if(n){
      return array.map((el,i) => el === n? i : null).filter(el => el != null)
    } else{
      return []
    }
  }