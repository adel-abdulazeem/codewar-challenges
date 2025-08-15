//P: 2 str param
//R: true or false
//E:
//P:

// write the function isAnagram
var isAnagram = function(test, original) {
    //conditional 
    //toLowercase then split then sort then comapare
    return test.toLowerCase().split('').sort().join('') == original.toLowerCase().split('').sort().join('')
  };


