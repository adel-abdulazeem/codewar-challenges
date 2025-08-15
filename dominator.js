// arr of intg, dominator is the value that occurs in more than half of the elements of arr
// return the dominator
// arr = [3,4,3,2,3,1,3,3] => 3
// loop through the arr to determine how many times each el is found
function dominator(arr) {
    //declare a var of counts
    // loop  using find that find 1st el that evaluates to true
    // or return -1 if find loop evalutes to false by not returning a val
    let counts = {}
    return arr.find(value => (counts[value] = (counts[value] + 1 || 1)) > arr.length / 2) || -1;
  
  
  }
  
  console.log(dominator([3,4,3,2,3,1,3,3]))