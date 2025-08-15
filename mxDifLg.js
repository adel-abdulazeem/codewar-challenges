//P: 2 arr of str 
//R: if both arrs are [] return -1 || num 
//E: 
//P: 

function mxdiflg(a1, a2) {
    const maxx = (x) => x.map(el => el.length)
    return a1.length === 0 || a2.length === 0 ? -1 : Math.max( Math.max(...maxx(a1)) - Math.min(...maxx(a2)), Math.max(...maxx(a2)) - Math.min(...maxx(a1)) )
  }
  
  console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]))