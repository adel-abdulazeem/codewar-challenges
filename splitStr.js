// str, contains even || odd no of char 
// arr of el where each el consists of 2 char, str.length % 2 !== 0? last el + '_'
// * 'abc' =>  ['ab', 'c_']
// 
function solution(str){
    // declare a var of []
   // condtional to determine if str length is odd or even no
   // split 
   // loop pushing each 2 sequential chars to the []
  let a = str.split('')
  let arr  = a.length % 2 === 0? a : a.concat('_')
  let result = []
  for(let i = 0; i < arr.length; i+=2){
    result.push(arr[i] + arr[i+1])
  }
  return result 
}

console.log(solution('abcdf'))