//P: arr of words
//R: str from concatenation of charact of each word their indices match the same index of the word withing the arr
//E: ["yoda", "best", "has"]  -->  "yes"
//P:
function nthChar(words){
    //loop through words arr returning the char of each item which its index matches the index of each word within the words arr
    //then join the letters of the resulted arr
    return words.map((item,i) => item[i]).join('')
   }
  
   console.log(nthChar(["yoda", "best", "has"]))