//P: str of num 
//R: arr of arr of starting from 0 to each num
//E: counterEffect("1250"), [[0,1],[0,1,2],[0,1,2,3,4,5],[0]])
//P:

function counterEffect(hitCount) {
    //split the given str 
    //map through it converting each el into number
    //then declare a var of []
    //loop through the maped arr pushing arr from 0 to that el within the arr
  let outPut = []
  for(let i = 0; i < hitCount.length; i++){
    let subArr = []
    for(let j = 0; j <= Number(hitCount[i]); j++){
      subArr.push(j)
    } outPut.push(subArr)
  }
  return outPut
   }
  
   console.log(counterEffect('1250'))