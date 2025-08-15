//Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

//P: str of words
//R: sorted array alpha of str according to last char
//E: 
//P:


function last(x){
    //split x by ' ' to get arr of words
    //sort those words alpha according to the last char
    return x.split(' ').sort((a,b) => a.charCodeAt(a.length -1) - b.charCodeAt(b.length -1))
  }
  
  console.log(last('what time are we a up the volcano'))