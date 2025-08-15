//Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

//P: arr of num/ nums & str
//R: num or undefined
//E:
//P
function cubeOdd(arr){
    //conditionals
    //filter odd num 
    //cube items
    //reduce and collect num withing the arr
    return arr.some(item => typeof item == 'string')? undefined : arr.filter(item => item % 2 !== 0).map(item => Math.pow(item,3)).reduce((acc,c) => acc + c, 0)
  
    }
  
    console.log(cubeOdd([-3,-2,2,'z']))