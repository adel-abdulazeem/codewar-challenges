function findMissingNumbers(arr){
    let res = []
    for(let i = arr[0]; i <= Math.max(...arr); i++){
        res.push(i)
    }
    return res.filter(el => !arr.includes(el))
  }

  console.log(findMissingNumbers([-3,-2,1,4]))