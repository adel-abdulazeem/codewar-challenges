function sort(initialArray, sortingArray) {
    let arr = []
    for(let i = 0; i < initialArray.length; i++){
      arr.push([initialArray[i], sortingArray[i]])
    }
   return arr.sort((a,b) => a[1] - b[1]).map(el => el[0])
  }