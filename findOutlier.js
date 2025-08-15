// arr, length >= 3, intg, entirely odd || even except 1
// num wich is the outlier that is single odd || even
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
//[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
function findOutlier(integers){
    //declare 2 var each one holds an arr filtered on the condition of odd and even
    //condtional
    let arr1 = integers.filter(el => el % 2 !== 0)
    let arr2 = integers.filter(el => el % 2 === 0)
    return arr1.length < arr2.length ? arr1[0] : arr2[0]
  }
  
  console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36] ))