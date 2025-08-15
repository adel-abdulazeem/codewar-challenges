function pendulum(values) {
    //arr of intgers size at least 3
    //declare a var of []
    //conditional
  let arr = []
  let list = []
  values.sort((a,b) => a - b).forEach((el,i) => (i % 2 ? arr : list).push(el) )
    return list.reverse().concat(arr)
  }
  //[5,6,6,8,10]
  //list = [5,6,10]
  //arr = [6,8]
  console.log(pendulum([6, 6, 8 ,5 ,10]))
  
  console.log(2 % 2? true : false)