function vowelIndices(word){
    //P: str of words that might uppercase 
    //R: arr of indexes of vowels within the str
    //E: "super" => [2, 4]
    //P:
    //declare var of vowels in the forms of str
    //declare a var of []
    //loop 
    //conditional if it is true push the index + 1 of that el that's true upon the applied condition
    let vowels = 'aeiouy'
    let result = []
    let str = word.toLowerCase()
    for(let i = 0; i < str.length; i++){
      if(vowels.includes(str[i])){
        result.push(i + 1)
      }
    }
    return result
  }
  
  console.log(vowelIndices('super'))