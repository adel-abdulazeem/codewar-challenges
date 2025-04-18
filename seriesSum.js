// write a func that takes num as input and return a num with 2 fixed notation
// param is num, always valid, might be 0 is should return 0.00


function seriesSum(n) {
    //5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
    //1 --> 1 --> "1.00"
    //2 --> 1 + 1/4 --> "1.25"
    // figure out the rule of the series to complete this.

    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += 1 / (1 + i * 3);
    }
    return  sum.toFixed(2);
  }

  console.log(seriesSum(3))