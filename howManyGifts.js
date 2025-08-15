//P: 2 params 1st is num, 2nd is arr of ingter > 0 & never empty
//R: num 
//E: howManyGifts(20, [13, 2, 4, 6, 1]), 4)
//P:

function howManyGifts(maxBudget, gifts){
    //declare a var of []
    //sort the given arr ascendingly
    //loop 
    //condtional while looping to reassign the var
    let giftNum = []
    let sum = 0
    let arr = gifts.sort((a,b) => a - b)
    for(let i = 0; i < gifts.length; i++){
      sum += gifts[i]
      if(sum <= maxBudget){
        giftNum.push(gifts[i])
      }
    }
    return giftNum.length
  }
  
  console.log(howManyGifts(20, [13, 2, 4, 6, 1]))