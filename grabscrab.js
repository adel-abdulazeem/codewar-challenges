function grabscrab(anagram, dictionary) {
    // 2 params, 1st is str, 2nd is arr of words
    // new arr of words that matches the letters in anagram
    // grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
    // 
    let anag = anagram.split('').sort().join('')
    return dictionary.filter(el => el.split('').sort().join('') === anag)
  }
  
  console.log(grabscrab("oob", ["bob", "baobab"]))


  function groupByCommas(n) {
    // num, intg
    // str of num where every 3 digits separated by comma
    //  1000000  ->   "1,000,000"
    // stringfy, then loop every 3 digits 
    let res = String(n).split('')
    let result = []
    for(let i = 0; i < res.length; i++){
      if(i % 3 === 0){
        result.push(',')
      } 
      result.push(res[i])
    }
    result.join('')
  }

  console.log(groupByCommas(1000000))