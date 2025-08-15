//P: str of 2 words or more seprated by " "
//R: a spoonerism of those words spoonerim a spoken phrase in which the first letters of two of the words are swapped around, often with amusing results.
//E: ("nit picking"), "pit nicking"
//P
function spoonerize(words) {
    //replace the first letter of the 1st word with the first letter of the 2nd word
    let arr = words.split(' ')
    return [arr[1][0] + arr[0].slice(1), arr[0][0] + arr[1].slice(1)].join(' ')
  
  }
  
  
  console.log(spoonerize("pack lies"))
  
  console.log('pack'.slice(1,-1))