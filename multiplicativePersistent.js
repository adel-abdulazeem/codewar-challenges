// num, +ve, 
// num which represent multiplicative persistence, represent how many times the num is multiplied
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
//

function persistence(num) {
    // declare a var of count of 0
    // stringfy the num 
    // split 
    //conditional to determine if the length is 1 then reutrn 0
    // loop then convert it each num to number type
    let count = 0;
  
    while (num >= 10) {
        num = num.toString().split('').reduce((acc, digit) => acc * parseInt(digit), 1);
        count++;
    }
  
    return count;
  }
  
  persistence(39)// 3
  console.log(persistence(99))// 4
  console.log(persistence(4))// 0