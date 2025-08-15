var mostFrequentEven = function(nums) {
    let charMap = {}
    let maxOccurence = 0
    let res = null
    for(const num of nums){
        if(num % 2 === 0){
            charMap[num] = charMap[num] + 1 || 1
        }
    }
    for(const char in charMap){
        if(charMap[char] > maxOccurence){
            maxOccurence = charMap[char]
            res = char
        }
    }
    return res? Number(res) : nums.every(el => el == 0)? 0 : -1
};

console.log([0,0])