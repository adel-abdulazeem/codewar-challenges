//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function shortcut (string) {
    let vowels = ['a', 'e', 'i', 'u', 'o']
      return string.split('').filter((item,index,arr) =>  !vowels.includes(item) ).join('')
    }