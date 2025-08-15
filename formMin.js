function minValue(values){
    // func takes arr of num => num which is smallest num can be formed
    // arr of nums, always valid, always contains nums
    // return num
    // [1, 3, 1] ==> 13
    // loop through to remove dup, and sort it ascending, then reduce to concate it as string
    return Number(values.filter((el,i) => values.indexOf(el) === i).sort((a, b) => a - b).
    reduce((acc, c) => acc + `${c}`))
  }