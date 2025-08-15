//Palindrome is a num that is equal to the same num in reversed order
//P: +ve intgers 
//R: 0 if the input is a palindrome or num of the steps needed to obtain palindrome of the given num
//P:

var palindromeChainLength = function(n) {
    //conditional to determine if n is palindrome or not
    //if true return 0
    //if not we declare a var of count of 0
    //loop and keep summing the passed num with its reversed order  and repeat the same each time reassigning the count and the given num till the condition of being a a palindrome evaluates to false by equaling the reassign num with its val but reversed 
  
    let count = 0
    let num = n
    for(let i = 0; i < n ; i++){
  if(num !== Number(`${num}`.split('').reverse().join(''))){
    num += Number(`${num}`.split('').reverse().join(''))
     count++
   }else{
    count
   }
    }
  return count
  };
  
  console.log(palindromeChainLength(89))

  function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      if (i % 5 === 0 && i % 3 === 0) {
        console.log(i, 'FizzBuzz');
      } else if (i % 3 === 0) {
        console.log(i, 'Fizz');
      } else if (i % 5 === 0) {
        console.log(i, 'Buzz');
      }
    }
  }

  fizzBuzz(100)