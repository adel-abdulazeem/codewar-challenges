 // str in lowercase || empty
  // arr of str el and the num of el == str.length where each el have an uppercase letter
  // wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
  //
  function wavee(str){
    //declare a var of []
    //loop to reassigne that var using push and slice method and join
    let result = []
      for(let i = 0; i < str.length; i++){
        result.push(str.slice(0,i) + str[i].toUpperCase() + str.slice(i+1))
      }
      return result
  }