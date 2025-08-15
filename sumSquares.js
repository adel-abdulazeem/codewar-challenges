// func takes arr of el, maybe sub arr => num which sht sum of the squared of each el
// arr || arr of nested arr, valid
// num which is the sum of the squared elements
// console.log(SumSquares([[1,2],3])) // 14
// 

function SumSquares(l){

    // loop through each el and check if it arr or not 
    // if it arr, return acc + SumSquares(l)
    // acc + c * c
    return l.reduce((acc,c) => {
        if(Array.isArray(c)){
            return acc + SumSquares(c)
        } else {
           return acc + c*c
        }
      }, 0)
}

console.log(SumSquares([[1,2],3]))
