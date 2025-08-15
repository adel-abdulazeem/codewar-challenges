
//P: obj
//R: array of the obj keys upon condition
//E:
//P:




function myLanguages(results) {
    //apply Object.keys method the returns arr of keys name
    //filter the key arr upon key val within the given obj if it is > 59
    //sort descendingly
    return Object.keys(results).filter(item => results[item] > 59).sort((a,b) => results[b] - results[a])
    }
  
    console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}))