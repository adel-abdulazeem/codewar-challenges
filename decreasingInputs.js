//write a func tht takes comma separated nums, then it should return the sum of those nums where each one is divided by i + 1 || )
// comma separated nums or []
// a number rounded to the nearest intger || 0 if 
// 
function add(...arr) {
    // pass a param in the form of rest param to collect args into an arr
    // conditional to handle case when there's no passed args
    // reduce method to sum all nums where each one is divided by (i + 1)

    return arr.length? Math.round(arr.reduce((acc,c,i) => acc + c/(i+1))) : 0
  }
  console.log(add(1,4,-6,20))