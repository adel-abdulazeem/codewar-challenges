function toBinary(n){
    if(n < 0){// for +ve values handled by 2 complements
      n += Math.pow(2, 32)
    }
    return n.toString(2)
  }