//P: str lowercase and never ''
//R: num that represent the calculation of word letters based off the sum of their alphabet position
//E: If　a = 1, b = 2, c = 3 ... z = 26
//P:
function wordsToMarks(string){
    //declare var that holds val of alphabets
    //split the string 
    //loop through resulted arr and calculate their value based on their index +1
    //reduce returning the sum of their corresponding positino
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    return string.split('').map(el => alphabets.indexOf(el) + 1).reduce((acc,c) => acc + c, 0)
  }
  
  console.log(wordsToMarks('love'))