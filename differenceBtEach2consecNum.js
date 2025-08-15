//In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:
//pairs([1,2,5,8,-4,-3,7,6,5]) = 3The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]

//P: arr of nums +ve/-ve
//R: num that represent how much nums are consecutive
//E: 
//P:



function pairs(ar){

    //declare a var and assign 0 to it
    //loop through the given arr moving through each other el
    //conditional 
    //Math.abs of subtraction of each 2 consec el
    //return the count of each true execution
    let count = 0
      for(let i = 0; i < ar.length; i+=2){
        if(Math.abs(ar[i]) - Math.abs(ar[i+1]) == 1)
            count++
      }
      return count
    };
    
    console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]))