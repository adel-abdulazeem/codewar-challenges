//As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

//P: array of 3 num
//R: index of the num that its val bt the val of other 2 num
//E: 
//P:


function gimme (triplet) {

    //create 2 var one the hold the min valu
    //the other that hold the max val
    //loop through the arr using findIndex method returning the index of the num that is not min max
    let min = Math.min(...triplet)
    let max = Math.max(...triplet)
    return triplet.findIndex(item => item !== min && item !== max)
    }

    console.log(gimme([2,3,1]))
