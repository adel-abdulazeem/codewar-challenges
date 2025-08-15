//The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
//The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
//If the score < 0, return 0.

//function that takes 2 array as param compare their el and return a val

//P: 2 arr1 the answers & arr2  the student choices their el could be empty
//R: a num || 0 depending on the score after applying some conditionals
//E: 
//P: 
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))

function checkExam(array1, array2) {
    //declare a var and assign [] to it
    //loop through arr1 
    //conditionals 
    //declare another var score with a value of the resulted arr  reduce method
    //conditional either to return score or 0 
    let result = []
    for(let i = 0; i < array1.length; i++){
        array1[i] == array2[i] ? result.push(4) :
        array2[i] == '' ? result.push(0) :
        result.push(-1)
    }
    let score = result.reduce((acc,c) => acc + c, 0)
    return score > 0 ? score : 0 
  }
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))
