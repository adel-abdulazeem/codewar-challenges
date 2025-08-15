//num
//num which represent the count of 1 as the binary representation of input num
//
var countBits = function(n) {
    // stringfy the n
    //toString(2)
    //declare a var of count 
    //loop to reassign the valut of the count var bases on conditional
    let bin = n.toString(2)
    let count = 0
    for(let i = 0; i < bin.length; i++){
      if(bin[i] == "1"){
        count++
      }
    }
    return count
  };
  
  console.log(countBits(1234)) // return 5