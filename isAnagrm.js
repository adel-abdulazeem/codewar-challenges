/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length != t.length) return false
    let charMap = {}

    for(char of s){
        charMap[char] = charMap[char] + 1 || 1
    }

    for(let letter of t){
        if(!charMap[letter] || charMap[letter] <= 0){
            return false 
        }
        charMap[letter]--
    }
    return true
};