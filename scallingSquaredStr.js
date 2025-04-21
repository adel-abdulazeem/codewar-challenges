//given a str of n lines each substr being n char long
// func takes 3 params str which might be'', k& n  which nums, +ve valide
// return a string broken into many lines of n char long each if the str is empty should return 

function scale(strng, k, n) {
    if(strng == '') return ''
  let arr =  strng.split('\n')
    .map(el => el.split('')
    .map(letter => letter.repeat(k)).join(''))
    return arr.map(el => `${el}\n`.repeat(n))
            .map((el,i, a) =>  el.split('\n').join('\n'))
            .join('').trim()
 }

 console.log(scale("abcd\nefgh\nijkl\nmnop", 2, 3)) // "aabbcc\nddeeff\ngghhiijj\nkkllmmnn"