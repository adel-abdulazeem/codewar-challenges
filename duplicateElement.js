//P: 2 arrs of intg 
//R: boolean if both arrs contain at least one identical element
//E: (duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9]), true
//P: 
function duplicateElements(m, n) {
    //loop using some method
    return m.some(el => n.includes(el))
    }
    
    console.log(duplicateElements([1, 2, 3, 4, 5], [ 6, 7, 8, 9]))