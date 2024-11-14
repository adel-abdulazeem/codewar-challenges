//abcdefghijklmnopqrstuvwxyz

var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0
    let k = 1
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[i - 1]){
            nums[k] = nums[i]
            k++
        }
    }
    return nums.slice(0,k)
};




console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))













var merge = function(nums1, m, nums2, n) {
    //merge nums1, nums2, sorted ascend
    // nums1 length = m + n, nums1.slice(0,m+1) denotes the el that should merged
    //
    let p1 = m - 1; // Pointer for nums1's initialized part
    let p2 = n - 1; // Pointer for nums2
    let p = m + n - 1; // Pointer for the end of nums1

    // Merge in reverse order
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }

    // Copy any remaining elements from nums2 (if any)
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
  };

//   console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))
//   console.log(merge([1], 1, [], 0))
//   console.log(merge([0], 0, [1], 1))


















