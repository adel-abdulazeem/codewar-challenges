// func takes 2 str as params and compar their sum based on their ascii values
// 2 params, str, should be treated as UPperCase, and if it null should be teated as empty str  or contains other char other than A-Z, should be treated as empty str
// return true if their sum is equal, false otherwise

//abcdefghijklmnopqrstuvwxyz
//ABCDEFGHIJKLMNOPQRSTUVWXYZ
function compare(s1, s2) {
//check if s1 & s2 are all letters otherwise return empty str
// convert to upper case and return the sum of their ascii values
// then compare the 2 sums
 s1 = s1 || ""
 s2 = s2 || ""

function isLetterOnly(str){
    return /^[a-zA-Z]*$/.test(str);
}

function calculateSum(str){
    if(!isLetterOnly(str)) return 0
 return str.toUpperCase().split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)
}

return calculateSum(s1) === calculateSum(s2)

}

console.log(compare("Ad", "bc"), true) // true
console.log(compare("ad", "DD" ), false)
console.log(compare("gf", "FG" ), true) // true
console.log(compare("zz1", "" ), true)
console.log(compare("ZzZz", "ffPFF"), true)
console.log(compare("kl", "lz" ), false)
console.log(compare(null, "" ), true)



