// str of words
// new str of words where vowel letter is converted to a num of its corresponding index + 1 in the str of "aeiou"
// decode("h3 th2r2") would return "hi there".
//

function encode(string) {
    //declare a var of vowel 
    //loop
    //replace method that will replaced each vowel with each corresponding index in the vowel var +1
    let vowel = 'aeiou'
    let arr = string.split('')
    for(let i = 0; i < arr.length; i++){
      if( vowel.includes(arr[i])){
        arr[i] = vowel.indexOf(arr[i]) + 1
      }
    }
    return arr.join('')
  }
  console.log(encode('How are you today?'))
  
  function decode(string) {
    let vowel = 'aeiou'
    let arr = string.split('')
    for(let i = 1; i < string.length; i++){
      if(Number(arr[i])){
        arr[i] = vowel[Number(arr[i]) -1]
      }
    }
    return arr.join('')
  }
  console.log(decode('h2ll4'))