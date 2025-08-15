//P: str, lowercase letters & nums
//R: return the largest num of the number groupings
//E:solve("gh12cdy695m1") = 695
//P: 
function solve(s) {
  //we need to extract the number groupings
  //then we need to compare to determine which is the largest

let numArr = s.split('').map(el => Number(el)).join('').split('NaN').filter(el => Number(el)).map(el => Number(el))
return Math.max(...numArr)
};

console.log(solve("gh12cdy695m1"))