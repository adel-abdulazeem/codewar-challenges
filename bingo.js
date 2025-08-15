
//P: arr of num
//R: str of 'win' || "lose" upon conditional 
//E:
//P: 



function bingo(a) {
    //declare a var of alphabets and assign a str of alphabets to it
    //var of str 'bingo'
    //var of the resulted str corresponding with the given arr of num
    //then split the bin bin str applying the every method 
    let alphabets = ' abcdefghijklmnopqrstuvwxyz'
    let bin = 'bingo'
    let givenWord = a.map((el,i,arr) => alphabets[el]).join('')
    return bin.split('').every(el => givenWord.includes(el))? 'WIN' : 'LOSE'
  
  }
  console.log(bingo([21,13,2,7,5,14,7,15,9,10]))