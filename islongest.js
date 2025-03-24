function longestWord(stringOfWords) {
    let arr = stringOfWords.split(' ')
    let map = {}
    let maxLen = 0
    let res = ''
    for(char of arr){
        map[char] = char.length
    }

    for(char in map){
        if(map[char] > maxLen){
            maxLen = map[char]
            res = char
        }else if(map[char] == maxLen){
            maxLen = map[char]
            res = char
        }
    }
    return res
  }
  
  
  console.log(longestWord('red blue grey'))