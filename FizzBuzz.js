//P: num of intg
//R: arr of num and  str 'fizzbuzz' in case of num%3 == 0 && num%5 == 0
//'buzz' in case of num % 5 == 0 / 'fizz' in case of num%3 == 0
//E: 
//P:


function fizzbuzz(n){
    //declare a va and assign it to an empty arr
    //loop from 1 to n 
    //conditional 
    //return the reassigned arr
    let arr = []
   for(let i = 1; i <= n; i++){
     i % 3 == 0 && i % 5 == 0? arr.push("FizzBuzz") : 
     i % 3 == 0 ? arr.push('Fizz') : 
     i % 5 == 0 ? arr.push('Buzz') : arr.push(i)
   }
   return arr
  }
  
  console.log(fizzbuzz(18))