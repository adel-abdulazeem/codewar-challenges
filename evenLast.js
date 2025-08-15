//P: arr of intg
//R: sum of the el with even index * numbers[numbers.length - 1]
//E: 
//P: 




function evenLast(numbers) {
    //declare a var that hold the even index in the form of an arr
    //conditional
    //if it evalutes to true use reduce method to return the sum of the even nums 
    //Multiplies by the last num of the given num if the given arr not empty
    let arr = numbers.filter((item,index) => index % 2 == 0)
    let lastEl = numbers[numbers.length - 1]
    console.log(arr)
    return numbers.length !== 0 ? arr.reduce((acc,c) => acc + c,0) * lastEl : 0
  }
  
  console.log(evenLast([2, 3, 4, 5, 8, 0, -4]))