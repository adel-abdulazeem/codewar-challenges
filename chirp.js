// func takes a num => a chrip str repeate to a certain num of times == to the givne num
// num, valid, +ve, intge
// string of chrim repeat many time == n
// 
function chirp(n) {
    // declare a var of chrip.
    // if n >= 1 // return chrip.
    // else chrip(n-1)
    let res = 'chirp'
    if(n <= 1){
      return res
    } else {
      return  'chirp-' + chirp(n-1) 
    }
  }
  
  console.log(chirp(4)) //chirp-chirp-chirp-chirp.