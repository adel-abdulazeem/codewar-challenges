// func tht takes str as space delimited, then check if elements are ascending seq of intgers incrementing by one, returning 0 or 1, num based on certain conditions
// str param, el are spaced delimit, contains nums, intger, might contain letters, might be ascend or broken
// one of 3 nums, 0, 1, or num based on the met condition
// 


function findMissingNumber(sequence){
    //declare a var arr that holds the split by space val of seq param by
    // for loop
    // conditonal statement 1st determine if the character is intger or not, if not intg return 1
    // if the seq is broken return the lowest missing num
    // conditional to determine if the each 2 adjacent el are incremented by one or not starting from 1 return 0
    //e
    if (!Number.isInteger(+sequence.split(' ').join(''))) return 1;
    let arr = sequence.split(' ').map(el => Number(el))
    for(let i = 1; i < Math.max(...arr); i++){
        if(!arr.includes(i)) return i 
    }
    return 0
  }

  console.log(findMissingNumber("1 2 3 4"))// return 0 because the sequence is complete
  console.log(findMissingNumber("1 2 4 3" ))//return 0, (order doesn't matter)
  console.log(findMissingNumber("2 1 3 a" ))//eturn 1, because it contains a non numerical character
  console.log(findMissingNumber("1 3 2 5" ))//return 4, because 4 is the lowest missing from the sequence

console.log('hello')


