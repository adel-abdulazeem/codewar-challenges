//P: arr of nums
//R: num of sum of the even val
//E: [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
//P:

function sumEvenNumbers(input) {
    //conditional 
    //loop to filer 
    //then loop to reduce 
    return input.length > 0 ? input.filter(el => el % 2 === 0).reduce((acc,c) => acc + c, 0) : 0
  }