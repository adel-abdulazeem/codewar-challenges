//P: str of words, each words contain a single num Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//R: str where each word ordered into a position according the val of the num it contains
//"is2 Thi1s T4est 3a"  // "Thi1s is2 3a T4est"
function order(words){
    // split the words sptrin by ' '
    //loop 
    //sort
    return words.split(' ').map(el => el + el.split('').filter(x => Number(x))).sort((a,b) => a[a.length -1] - b[b.length -1]).map(el => el.slice(0,-1)).join(' ')
  
  }
  
  console.log(order("is2 Thi1s T4est 3a"))