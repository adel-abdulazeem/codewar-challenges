function freqSeq(str, sep) {
    let charMap = {}
    let res = ''
    for(char of str){
        if(charMap[char]){
            charMap[char]++
        }else{
            charMap[char] = 1
        }
    }
    for(const char of str){
        res += charMap[char] + sep
    }
    return res.split('').slice(0, -1).join('')
  }

  console.log(freqSeq("hello world", "-" ))