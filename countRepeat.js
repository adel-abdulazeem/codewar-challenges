// func takes str of letters, remove repeated char consecutively and keep it once and return length of the removed char
// str of letters, some letters are repeated
// 'abbbbc'  => 'abc'    #  answer: 3
//
function countRepeats(str) {
    //declare a var and assign it str is splitted
    // loop
    let arr = str.split('')
    let res = []
    for(let i = 0; i < arr.length; i++){
      if(arr[i] !== arr[i+1]){
        res.push(arr[i])
      }
    }
   return str.length - res.length
  }
  console.log(countRepeats('abbbbcb'))