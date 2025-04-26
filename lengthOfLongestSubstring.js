//func takes str and return the longest substr without duplicate char
// str as param, always str, always valide, letters, digits, syb or space
//return num, that represent the length of the longest substr without dup
//


var lengthOfLongestSubstring = function(s) {
    // charMap as empty to detect theocurrence of each char in the str or not
    // count var of 0 then reassign as the char is not occured before in the charMap obj
    // we loop 
    // conditional while looping to reassign charMap and count vars
    let set = new Set()
    let lft = 0
    let maxLength = 0
    for(let i = 0; i < s.length; i++){
        while(set.has(s[i])){
            set.delete(s[lft])
            lft++
        }
        set.add(s[i])
        maxLength = Math.max(maxLength, i - lft  + 1)
    }
    return maxLength
};


console.log(lengthOfLongestSubstring('abc'))// 3
console.log(lengthOfLongestSubstring('bbbbb'))// 1
console.log(lengthOfLongestSubstring('pwwkew'))// 3 = wke

