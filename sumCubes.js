//P: +ve intger n
//R: sums all of the cubed nums from 1 to n(inclusive) returning the sum
//E: 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
//P:

function sumCubes(n){
    //declare a var of []
    //loop 
    //reduce returning the sum
    let cubes = []
    for(let i = 1; i <= n; i++){
      cubes.push(i * i * i)
    }
    return cubes.reduce((acc,c) => acc + c, 0)
  }
  
  console.log(sumCubes(2))