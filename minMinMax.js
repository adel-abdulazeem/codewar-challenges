

//P: arr of intger
//R: arr of 3 el one represent the smallest num, minimum absent & largest
//E: minMinMax([2, -4, 8, -5, 9, 7]); //[-5, -3,9]
//P



function minMinMax(array) {
    //declare a 2var one holds the val of min and another holds the val of max
    //delcare another var that hold the val of minAbsent of 0
    //sort the given arr
    //loop through the given arr 
    //conditional to reassign the minAbsent
    let smallest = Math.min(...array)
    let largest = Math.max(...array)
    let minAbsent = []
    array.sort((a,b) => a - b)
    for(let i = 0;  i < array.length; i++){
      if(!array.includes(array[i] + 1)){
        minAbsent.push(array[i] + 1)
      }
    }
    return [smallest, minAbsent[0], largest] 
  }
  console.log(minMinMax([2, -4, 8, -5, 9, 7]))
