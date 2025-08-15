// arr of str
// new formatted str
// ['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
// 

function formatWords(words){
    //loop adding "," to every el except 2 last 
    // slice last 2 el then join with and
    // concat result of both
    let arr = words ?  words.filter(el => el) : words
    if(arr){
      return arr.length > 2?  arr.slice(0,arr.length-2).map(el => el + ',').concat(arr.slice(-2).join(' and ')).join(' ') : arr.length == 2 ? arr.join(' and ') : arr.length == 1? arr.join('') : ''
    }
    return ''
    }
    
    console.log(formatWords(['ninja', 'samurai', 'ronin']))
    console.log(formatWords(['one', '', 'three']))
    console.log(formatWords([]))