//P: arr of arrs of num el ingter
//R: num that represent the the array average
//E: [3, 4, 1, 3, 5, 1, 4] = (3 + 4 + 1 + 3 + 5 + 1 + 4) / 7 = 3[21, 54, 33, 21, 77] = (21 + 54 + 33 + 21 + 77) / 5 = 41.2
//P:
const sumAverage = (arr) => {
    //loop through given arr reducing each nested arr by summing their el divided by el arr length
    //the loop through the resulted arr reducing it by summing its el
    //then return Math.floor of that result that rounds it down to largest ingter less than or equal to a given number number 
    return Math.floor(arr.map(el => el.reduce((acc,c) => acc + c,0)/el.length).reduce((acc,c) => acc + c, 0))
    }
    
    console.log(sumAverage([[-4, 3, -8, -2], [2, 9, 1, -5], [-7, -2, -6, -4]]))