//P: arr of nums, unique +Ve/-Ve gap could be > 1
//R: arr of obj of nums that are not consecutive || empty if all arr is consective or has 1 el then return empy arr
//E: [1,2,3,4,6,7,8,10] --> [{i: 4, n:6}, {i: 7, n:10}]
//P: 

function allNonConsecutive (arr) {
    //decalare a var of [] arr
    //loop
    //conditional to check consective or not
    //push 
    //conditional 
   let result = []
   for(let i = 0; i < arr.length; i++){
    if(arr[i] - arr[i+1] != -1){
      result.push({i: i+1, n: arr[i+1]})
    }
   }
  return result.length != 0? result.slice(0,-1) : []
  }
  console.log(allNonConsecutive([1,2,3,4,6,7,8,10]))