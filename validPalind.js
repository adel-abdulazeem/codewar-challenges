// func, str => boolean if the passed str is palindrome 
//palindrome reads teh same forward adn backward, afer converting all letters to lowercase and removing all non-alphanumeric char, 
// alphanumberic char (letters and nums)
// str, always valid, may contain nums, or other char
// boolean true if the word reads the same forward and backward after to lower and removing all non-alphanumeric
// isPalindrome('"A man, a plan, a canal: Panama")

var isPalindrome = function(s) {
    // declare 2 var first is forwardWord , 2nd is backWardWord
    // then split, filter and then reverse one and assign it to one var 
    // conditional to determine if the given stris palindrome or not 
    let forwardStr = s.toLowerCase().split('').filter(el => '//abcdefghijklmnopqrstuvwxyz0123456789'.includes(el)).join('')
    let backwardStr = s.toLowerCase().split('').filter(el => '//abcdefghijklmnopqrstuvwxyz0123456789'.includes(el)).reverse().join('')

    return forwardStr === backwardStr
};



console.log(isPalindrome("A man, a plan, a canal: Panama"), 'true')
console.log(isPalindrome("race a car"), 'false')