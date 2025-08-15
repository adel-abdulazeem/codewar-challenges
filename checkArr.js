
//P: arr which might be arr of arr || arr of str/obj/nums
//R: true if the items included within arr are arrays
//E: [[1],[2]] => true
//P

//use every method to loop through every item to test whether the passed param 
//matches the implmented function we provide or not
const arrCheck = value => { return value.every(item => Array.isArray(item)) }
console.log(arrCheck([[1],[2]]))