//Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.
function firstNonRepeatingLetter(s) {
    let str = s.toLowerCase()
    for(let i = 0; i < str.length; i++)
      if(str.indexOf(str[i]) == str.lastIndexOf(str[i]))
        return s[i];
    return '';
  }

  