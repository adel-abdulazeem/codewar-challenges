
//function takes an arr of nums => odds sorted ascend, evens sorted descend
// arr of nums, always valid, contains odds and even nums 
// new arr where odds sorted ascendingly and evens sorted descendingly
//  For example [1,2,3,4,5,6,7,8,9] produces the output [1,3,5,7,9,8,6,4,2].
// 


function sortItOut(array){
    // declare odds var that contains odds nums filtered out of the arr then sort asc
    // declare even var that contains even nums filtered out of the arr then sort desc
    let odds = array.filter(el => Math.floor(el) % 2 !== 0 ).sort((a,b) => a - b)
    let evens = array.filter(el => Math.floor(el) % 2 === 0).sort((a,b) => b -a)
    return odds.concat(evens)
    
  }