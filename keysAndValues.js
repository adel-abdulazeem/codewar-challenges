//P: obj of key val pairs
//R: arr of 2 arrs one for the key and the other for the vals
//E:keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
//P:
function keysAndValues(data){
    // Object.keys() obj method that returns arr of keys
    //Object.values() obj method tha treturns arr of vals
    return [Object.keys(data), Object.values(data)]
  }
  
  console.log(keysAndValues({a: 1, b: 2, c: 3}))