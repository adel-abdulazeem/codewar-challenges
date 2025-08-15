// func that takes a num as param => str
// param is num , could be > 1
// '' if n < 1 || str of nums repeated to num of times === the nth loop then jump on next line using \n
//pattern(5):

 /*
 pattern(5):

1
22
333
4444
55555
  */
function pattern(n){

    // declare a var res = []
    //conditional to determine if n<1 then return ''
    // or loop 
    // reassign the res var by pushing el repeated num of times === i
    // return the new arr joined by '\n'
    if(n < 1){
      return ''
    }
  let res = []
  for(let i = 1; i <= n; i++){
    res.push(`${i}`.repeat(i))
  }
    return res.join('\n')
  }

  console.log(pattern(11))