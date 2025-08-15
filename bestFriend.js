//P: 3params 1st str in lowerCase, 2nd&3rd letter
//R: boolean if all occurences of a given letter always immediately followed by other given letter
//E: ("he headed to the store", "h", "e") ➞ True
//P:
function bestFriend(txt, a, b) {
    //loop  to return the word that includes the letter of the 2nd param
  for(let i = 0; i < txt.length; i++){
    if(txt[i] ===a && txt[i+1] !==b)return false
  }
  return true
  }
  console.log(bestFriend('a test', 't', 'e'))