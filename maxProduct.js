



//P: 2param 1st is arr of num 2nd num 
//R: num represent the max nums multiplied by each other
//E: 
//P: 




function maxProduct(numbers, size){
    //sort arr ascendingly
    //slice the max nums based on val of the given size
    //reduce the max vals by multiplying each on with the other
    return numbers.sort((a,b) => a - b).slice(-size).reduce((acc,c) => acc * c)
    }
