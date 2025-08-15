//func takes n as an intg param => function counter
// num, intger/ +ve/-ve/ always valid
// num 
// 
var createCounter = function(n) {
    // create a closure
    // by return a func that increment n with each call
    // closure is func with an inner func then the inner func can access var defined in the outer func scope 
  return  () => n++
  };
  
  console.log(createCounter(count1()))
  