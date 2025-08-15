function binRota(arr){
    // arr of arr 
    // new arr of subArr elements concatenated
    // 
    // loop through the given arr reversing the the subarr at odd index
    //loop to spread the subarr
    return arr.map(el => arr.indexOf(el) % 2 !== 0 ? el.reverse().join(' ') : el.join(' ')).join(' ').split(' ')
    }
  
    console.log(binRota([ ["Stefan", "Raj",    "Marie"],
      ["Alexa",  "Amy",    "Edward"],
      ["Liz",    "Claire", "Juan"],
      ["Dee",    "Luke",   "Katie"] ]
    )) 