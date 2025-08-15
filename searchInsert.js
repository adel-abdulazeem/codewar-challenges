// func takes 2 params, 1st is arr of intg, sorted asc, 2nd is a num => num which is indexOf el === 2nd param || indexOf target param if it's added to nums after sorting it ascen
// 2 params 1st is arr of nums, ingter, distinct, 2nd param is a num that is intg
// return a num which is the indexOf the el in nums arr === val of target || the index of target el if pushed to nums arr after sorting it asc
// searchInsert([1,3,5,6],7) // 4
function searchInsert(nums,target){
    // push the target to the nums arr
    // decalre a var of res and assign it nums arr sorted asc
    // return the index of 1st occurence of target el
    nums.push(target)
    let res = nums.sort((a,b) => a - b)
   return res.indexOf(res.find(el => el === target))
 }
 
 console.log(searchInsert([1,3,5,6],7))