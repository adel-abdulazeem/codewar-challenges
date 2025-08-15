


//P: arr of intg +ve/-ve duplicated
//R: arr of num that are > the sum to its right side
//E: 
//P: 


function arrayLeaders(numbers){
    let answers = [] //declare a var, assign it []
    for(let i = 0; i < numbers.length; i++){ //loop through the arr
        let sum = 0
        for(let j = i + 1; j < numbers.length; i++){ //start one position right of the main loop el
            sum += numbers[j] //add those numbers together
        }
        if(numbers[i] > sum){
            answers.push(numbers[i])
        }
    }
    return answer
  }



