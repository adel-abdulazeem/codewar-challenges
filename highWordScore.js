// str of words 
// return str with the highest point according to its position in the alphabet
//a = 1, b = 2, c = 3

function high(x){
    //declare a var of alphabets
    // split it
    // declare a var of {}
    //loop to reassigne it
    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let score = {}
    let arr = x.split(' ')
    for(let i = 0; i < arr.length; i++){
      let count = []
      for(let j = 0; j < arr[i].length; j++){
        count.push(alpha.indexOf(arr[i][j]) + 1)
      }
      score[arr[i]] = count.reduce((acc,c) => acc + c ,0)
    }
  return Object.entries(score).sort((a,b) => b[1] - a[1])[0][0]
  }
  
  console.log(high('abs gh'))