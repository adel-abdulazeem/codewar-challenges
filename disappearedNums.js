var findDisappearedNumbers = function(nums) {
    let res = []
    for(let i = 1; i <= nums.length; i++){
        if(!nums.includes(i)){
            res.push(i)
        }
    }
    return res
};
console.log(findDisappearedNumbers([1,1]))