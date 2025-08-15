//P: arr of nums
//R: arr of nums where every 2nd el is doubled
//E: 
//P:
function doubleEveryOther(a) {
    //loop if index of el % 2 !== 0 then tht el = el * 2
    return a.map((el,i) => i % 2 !== 0? el * 2: el)
  }
  console.log(doubleEveryOther([1,2,3,4]))