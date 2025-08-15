function getDivisorsCnt(n){
    //declare a var count = 0
    //loop to reassign it based on conditional
  let count = 0
  if(n%Math.sqrt(n)==0) count++;
  for(let i = 0; i < Math.sqrt(n); i++){
    if(n % i == 0){
      count +=2
    }
  }
  return count
  }
  
  console.log(getDivisorsCnt(30))