function solve(arr){
    let sortedArr = arr.sort((a,b) => a - b)
    let res = []
    // while( sortedArr.length){
    //   res.push(sortedArr.pop(), sortedArr.shift())
    // }
    // // return res[res.length - 1]? res : res.slice(0, -1)
    //     console.log(sortedArr)
    //     console.log(sortedArr.pop())
    //     console.log(sortedArr.shift())
        res.push(sortedArr.pop(), sortedArr.shift())
        return res
    };
    
  console.log(solve([1,6,9,4,3,7,8,2]))