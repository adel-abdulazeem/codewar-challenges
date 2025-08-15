//func takes obj of key/pairs => obj where each value is filtered out returning values without repetitions.

// obj of key/value(arr of str)


const removeDuplicateIds = (obj) => {
    const res = {}
    const keys = Object.keys(obj).sort((a,b) => b - a)
    const seen = new Set();
  
    for(const key of keys){
      res[key] = [];
      for(const val of obj[key]){
        if(!seen.has(val)){
          res[key].push(val)
          seen.add(val)
        }
      }
    }
    return res
  }
  
  console.log(removeDuplicateIds({
    "1": ["A", "B", "C"],
    "2": ["A", "B", "D", "A"],
  }))