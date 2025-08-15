function findOdd(A) {
    //arr of nums that could be odd and even
    //return the num that it occurs for odd num of times
    // [1,1,2] output 2
    // declare a var of {}
    // loop using find method applying conditional
    let count = {}
     A.forEach(el => count[el] = (count[el] + 1 || 1) )
     return A.find(el => count[el] % 2 === 1)
    }

    console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))