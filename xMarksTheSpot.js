// func takes 2 dim arr => co-ordinate of x. 
// arr, might be [], arr of sub arrs
// return [] if input is [], if no x found  || arr of 2 el where 1st el is index of the sub arr that contains 'x', and 2nd el is the index of 'x' within the sub arr
//


function xMarksTheSpot(matrix) {
    // conditional to determine is input is [], we should return []
    if (matrix.length === 0) return []
    //create a var res with initial val of []
    let res = []
    // create another var count to hold how many times 'x' char is found in subarrr
    let count = 0;
    //loop to reassign through matrix input to reassign
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].forEach((el, index) => {
            if (el === 'x') {
                count += 1
                res.push(i, index)
            }
        })
    }
    return count === 1 ? res : []
}

console.log(xMarksTheSpot([]), '[]')
console.log(xMarksTheSpot([['o', 'o'], ['o', 'o']]), '[]')
console.log(xMarksTheSpot([['x', 'o'], ['o', 'o']]), [0, 0])