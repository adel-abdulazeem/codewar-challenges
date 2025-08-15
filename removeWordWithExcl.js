// write a func tht removes words from a sentence if they contain one exclamation mark. 
//str where words re sep by a single space, without leading || trailing, always valid
// return new str contains only words without exclam, or empty str


function remove (string) {
    // split str param by space, loop using with conditional
    // loop using filter then spliting by '!' conditional if the resulted arr.length != 2 then return it then join by space 
  return string.split(' ').
        filter(word => word.split('!').length !== 2)
        .join(' ')

}
console.log(remove("Hi! !Hi!! Hi!"), '!Hi!')
console.log(remove("Hi Hi! Hi!"))
console.log(remove("Hi! Hi!"))
console.log(remove("pbih mbw xjmbwc !swfwco !ritmmpg eder"))