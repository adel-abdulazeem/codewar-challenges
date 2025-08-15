function meanVsMedian(arr) {
    //arr of nums
    // str
    //meanVsMedian([1, 2, 37]) output 'mean'
    //calcule the mean
    //clculate the median 
    //conditional to return str
    //declare 2 var one for the mean and another for the median
    arr.sort((a,b) => a - b)
    let mean =  arr.reduce((acc,c) => acc + c, 0)/arr.length
    let medianIndex = (arr.length + 1)/2
    let median = arr[medianIndex -1]
    return mean > median ? 'mean' : mean < median? 'median' : 'same'
  }
  console.log(meanVsMedian([1, 2, 37]))