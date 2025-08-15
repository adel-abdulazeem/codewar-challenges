function removeDuplicateInPlace(nums){
    if(nums.length === 0) return 0
    let k = 0
    let maxChar = 0
    let charMap = {}
    let res = ''
    for( let char of nums){
        charMap[char] = charMap[char] + 1 || 1

    }
    for(const num in charMap){
        if(charMap[num] > maxChar){
            maxChar = charMap[num]
            res = num
        }
    }
    for(let i = 1; i < nums.length; i++){
        if(nums[k] !== nums[i]){
            k++
            nums[k] = nums[i] 
        }
    }
    return nums.slice(0, k + 1)
}

console.log(removeDuplicateInPlace([ 0, 1, 1, 1, 2, 2, 3, 3, 4]))

