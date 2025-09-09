// write a functions tht takes an arr of nums, then calc the average then return the diff bt each num within the input arr by each num from the average and rounding each difference to the second decimal digit

// arr of nums, always valid, integers, +Ve
// return an arr of nums, might be +ve/-ve with decimal 
//

function distancesFromAverage(arr) {
    //create a var average that holds the calc average by summing all arr el divided by the arr.length.
    // loop the input arr using map subracting each el within arr from the average num rounded to 2nd decimal
    const average = arr.reduce((acc, c) => acc + c, 0) / arr.length
    return arr.map(num => Number((average - num).toFixed(2)))
}

console.log(distancesFromAverage([55, 95, 62, 36, 48]), [4.2, -35.8, -2.8, 23.2, 11.2])
console.log(distancesFromAverage([1, 1, 1, 1, 1]), [0, 0, 0, 0, 0])