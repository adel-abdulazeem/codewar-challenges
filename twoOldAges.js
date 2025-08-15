//The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

//P: array of nums
//R: the 2 largest num
//E: 
//P: 


function twoOldestAges(ages){
    //sort the ages arr ascedingly
    //return a new arr of the last el within the sorted arr
    let arr = ages.sort((a,b) => a - b)
    return [arr[arr.length - 2],arr[arr.length - 1]]
  
  }