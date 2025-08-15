// write a func takes an arr and intger => arr of el that are most frequent with length == to the passed arg

var topKFrequent = function(nums, k) {
    // create a var charMap of {}
    // loop to reassign the charMap object determining how many times the el occures
    // declare a var arr of []
    // declare a var of max
    if(nums.length <= 1) return nums
    let charMap = {}
    let maxChar = 0
    let arr = []

    for(const char of nums){
        charMap[char] = charMap[char] + 1 || 1
    }

return Object.entries(charMap).sort((a,b) => b[1] - a[1]).map(el => Number(el[0]))

};
console.log(topKFrequent([4,1,-1,2,-1,2,3]))