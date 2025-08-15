function solution(string) {
    //str 
    // new str with space bt words
    // "camelCasing"  =>  "camel Casing"
  // loop through the given string
  // conditional if the passed letter is Upper case or not
    // split it upon the value the cnodtion evaluates to 
    return string.split('').map(el => el === el.toUpperCase()? " " + el: el).join('')
  }
console.log(solution('camelCasing'))