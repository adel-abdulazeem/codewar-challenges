//

function giveIndexOfTarg(nums, target) {
    let res = []
    for (let i = 0; i < nums.length; i += 2) {
        if ((nums[i] + nums[i + 1]) == target) {
            res.push(i, i + 1)
        }
    }
    return res
}
console.log(giveIndexOfTarg([2, 7, 11, 15, 3, 6, 3, 6], 9))