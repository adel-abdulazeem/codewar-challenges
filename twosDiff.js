// arr of intgers that have a difference of 2
// new arr of subArrs where each arr is formed of 2 elements the diff bt is 2
// [1, 2, 3, 4]  should return [[1, 3], [2, 4]]
//

function twosDifference(input){
    //declare a var of []
    // loop to reassign it upon conditional 
    //conditional if indexOf(input[i] + 2) != -1 then push
    // input[i] and input[i] +2
    // using push
    // return that var
    let arr = []
    input.sort((a,b) => a -b)
    for(let i = 0; i < input.length; i++){
      if(input.indexOf(input[i] + 2) != -1){
        arr.push([input[i], input[i] +2])
      }
    }
return arr
  }
   console.log(twosDifference([1, 23, 3, 4, 7]))
   console.log(twosDifference([4, 3, 1, 5, 6]))