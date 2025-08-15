// funct takes 2 str param ransomNote and magazine => true if ransomNote can be constructed by using the letters from magazine and false otherwise

// each letter in magazine can only be used once in ransomNote
// 2 str params ransomNote, magazine repectively
// return true or fasle
// canConstruct('aa', 'ab')// false

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // declare a var magazineMap of {}
    // loop through magazine str to record the letters in magazine str and how many times found
    // loop through ransomNote str using for..of 
    // conditional whether the letter from ransomNote is not found magazineMap obj or its val <= 0 to return false
    // else subtract the value of the key from magazine obj by 1
    // outside the loop return true
    let magazineMap = {}
    for(let char of magazine){
        magazineMap[char] = magazineMap[char] + 1 || 1
    }
    
    for(char of ransomNote){
        if(!magazineMap[char] || magazineMap[char] <= 0){
            return false
        }
        magazineMap[char]--
    }
    return true
    };

    console.log(canConstruct('aa','aba'))
    console.log(canConstruct('bg', "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"))