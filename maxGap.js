
//P: arr of intg +/- or zeros or duplicated
//R: max gap == max difference bt each 2 el
//E:
//P:

function maxGap (numbers){
    //loop though each el of the given arr to return absolute num
    //apply reduce method the subract each 2 el
    //then return the max val of the resulted arr
    let result = []
    numbers.sort((a,b) => a - b)
  for(let i = 0; i < numbers.length; i++){
      result.push(numbers[i] - numbers[i+1])
  }
   return Math.max(...result.slice(0,-1).map(item => Math.abs(item)))
  
  }
  
  
  console.log(maxGap([13,10,2,9,5]))