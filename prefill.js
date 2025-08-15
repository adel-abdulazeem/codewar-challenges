//func takes 2 params n & v => an arr of v elements with length == n
// n is a num || anything other than an intg || intg formatted str >= 0 throw a typeError
// return arr || typeError of str `${n} is invvalid`
//     prefill(3,1) --> [1,1,1]

function prefill(n, v) {
    if (parseInt(n) !== Math.abs(n)) throw new TypeError(`${n} is invalid`);
    return +n ? Array(n).fill(v) : [];
  
  }
  
  console.log(prefill(0,1))
  console.log(prefill('3',1))
  console.log(prefill("xyz", 1))// "xyz is invalid"