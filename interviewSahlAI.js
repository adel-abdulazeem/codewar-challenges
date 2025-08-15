//unsorted arr of intg +/-v, dup, length > 3
// return 3rd largest el
// func tht takes an arr of intg => 3rd largest el
// arr, of nums, -/+Ve, dup
// return num 3rd el

var thirdMax = function(nums) {
    // function tht takes arr of intg -ve/+ve return the 3rd largest in o(n)
    let first = -Infinity, second = -Infinity, third = -Infinity;
    for(el of nums){
        if(el > first){
            third = second
            second = first
            first = el
        }else if(el > second && el < first){
            third = second
            second = el
        } else if(el > third && el < second){
            third = el
        }
    }
    return third === -Infinity? first : third
}

console.log(thirdMax([-5, -5,-6, -7, 0, -5, -5, -4, -4]))//[-7, -6, -5, -4]
console.log(thirdMax([1,2]))