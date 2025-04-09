//func takes intg arr & func return new arr  with transformation applied to each element
// accept 2 param, arr of intg 0 <= arr.length <= 1000  & fn returns an intg
// return new arr of intgers
//map([1,2,3], plusone(n))// [2,3,4]

var map = function(arr, fn) {
    // declare a var of []
    return arr.map((el, i) => fn(el, i ))
};
const plusone = (el) =>  el + 1
const constant = () => 42
const plusI = (el, i) => el + i
console.log(map([1, 2, 3], plusI))// [2, 3, 4]