// func takes 2 arrs num1, num2 sorted asc, 2 intg m & n represeting length of num1 & num2 => merge nums1 & nums2 into a single asc sorted arr

// 2 arrs num1, num2, 2 intg m, n
// arr which num1 hosting the result of merging where nums1 length = m + n where 1st m element represent el tht should be merged and n el are set to 0 and should be ignored.
//  merge = function(1,2,3,0,0,0], 3, [2,5,6], 3)// [1,2,2,3,5,6]

var merge = function(nums1, m, nums2, n) {
    let p1 = m  - 1
    let p2 = n - 1
    let p = m + n - 1
    while(p1 >= 0 && p2 >= 0){
        if(nums1[p1] > nums2[p2]){
            nums1[p] = nums1[p1]
            p1--
        }else{
            nums1[p] = nums2[p2]
            p2--
        }
        p--
    }

    while (p2 >= 0){
        nums1[p] = nums2[p2]
        p2--
        p--
    }
return nums1
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3) ,'[1,2,3,0,0,0], 3, [2,5,6], 3')
console.log(merge([1], 1, [], 0), '[1]')
console.log(merge([0], 0, [1], 1), '[1]')

// function targetSum(arr, targ){
//     let ltPointer = 0
//     let rtPointer = arr.length - 1
//     let pair  = null
//     while(rtPointer !== ltPointer){
//         let pairSum = arr[rtPointer] + arr[ltPointer]
//         if(pairSum == targ){
//             pair=[arr[ltPointer], arr[rtPointer]]
//             break
//         }else if(pairSum < targ){
//             ltPointer++
//         } else if (pairSum > targ){
//             rtPointer--
//         }
//     }
// return pair
// }

// console.log(targetSum([1,2,3,4,5], 7))

