// a function that takes two arguments and comparing one arguments with the average and returning a boolean value
function betterThanAverage(classPoints, yourPoints) {
    let  arr = classPoints.concat(yourPoints)
    let average = arr.reduce((acc,c) => acc + c, 0)/arr.length
return yourPoints > average? true : false

    }