// num 
// single digit num 
//132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
//
function digital_root(n) {
    if (n < 10) return n;
    
  return digital_root(n.toString().split('').reduce((acc,c) => acc + + c,0))
  }
  //  return (n - 1) % 9 + 1;
  
  console.log(digital_root(16)) // 7
  console.log(digital_root(942)) //-->  9 + 4 + 2 = 15  -->  1 + 5 = 6