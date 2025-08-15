//Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

//populate arr elements then concat then sor
//P: array containing elements of arrays
//R: array of sorted nums or empty array
//E: 
//P:

function flattenAndSort(array) {
    //P:
    //concat method that add to an empty arr the 
    //the spreaded element of the given array through using rest param
    //the apply sort method to sort num ascendingly
    return [].concat(...array).sort((a,b) => a - b)

    }
    
    console.log(flattenAndSort([[],[1]]))