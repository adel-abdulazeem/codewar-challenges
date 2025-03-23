function longestWord(stringOfWords) {
    return stringOfWords.split(' ').sort((a,b ) => b.length - a.length)[0]
  }
  
  
  console.log(longestWord('a b c d e fgh'))