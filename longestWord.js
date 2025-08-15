//P: str of words separated by space 
//R: longest word withing the given str or if there're many return the rightmost longest one 
//E:"red white blue"  =>  "white"
//P
function longestWord(stringOfWords) {
    //split by space
    //loop filtering upon returning the longest stringes from rightmost if there'se many using reduceRight method upon condition 
  
  return stringOfWords.split(' ').reduceRight((acc,c) => c.length > acc.length? c : acc)
  }