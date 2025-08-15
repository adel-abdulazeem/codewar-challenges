//P: arr of arrs
//R: arrs each one of the same type
//E: [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]] => [[1, 5, 4], ['b']]
//P:

function filterHomogenous(arrays) {
    //loop filtering 
    //conditional 
    // subarr length > 0 typof el withing the same arr is the same 
      return arrays.filter(el => el.length > 0 && el.every(item => typeof item  == typeof el[0]) )
    }
    
    console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]))