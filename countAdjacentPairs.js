// str of words, lower & upper case
// num
// "dog DOG cat"              -->  1
//
function countAdjacentPairs(searchString) {
    //declare a var of arr that has val searchString, toLowerCase , split(' ')
    //declare var count = 0
    // loop, conditional to reassign count
    let arr = searchString.toLowerCase().split(' ')
    let count = 0
    arr.forEach( (w, index, s) => {
      if(s[index] == s[index+1] && s[index+1] != s[index+2]) count++
    });
    
    return count;
  
  }
  console.log(countAdjacentPairs('orange Orange kiwi pineapple apple'))
  console.log(countAdjacentPairs("pineapple apple dog cat"))
  console.log(countAdjacentPairs("banana banana banana terracotta banana terracotta terracotta pie!"))