//P: arr of nums 
//R: new arr with each digit incremented by its index starting from 1 not 0 || [] if the given is empty
//E: [1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]
//P
function incrementer(nums) { 
    //declare a var that holds values of the reassigned arr then converting each of their reassigned el into a str
    //declare a var of []
    //loop through the reassigned arr to reassign the result var upon certain condition 
    //return the result 
  let arr = nums.map((el,i) => el + Number(i+1)).map(el => `${el}`)
  let result = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length > 1){
      result.push(arr[i][1])
    }else{
      result.push(arr[i])
    }
  }
  return result.map(el => Number(el))
  }
  console.log(incrementer([ 5, 8, 10, 5, 8 ]))