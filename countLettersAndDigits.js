function countLettersAndDigits(input) {
    // function takes str  of letters, nums, chart => count of digits of nums and letters
    // str of letters, nums and char
    // num which represent the how many digits of nums and letters
    // "hel2!lo" --> 6
    //declare a var of all letters(lowercae)and nums from 0-9
    // convert the input str to lowercase then split then loop filter to only return letters& nums
    // then return length of the resulted arr
    let digits = 'abcdefghijklmnopqrstuvwxyz0123456789'
    return input.toLowerCase().split('').filter(el => digits.includes(el)).length
  }