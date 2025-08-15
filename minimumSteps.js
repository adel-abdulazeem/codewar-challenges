//P: 2 param 1st is arr of intg of size >= 3 +ve el, migth be repeated, 2nd param is alway reeachable
//R: num that represent how many times we added the smallest el to get sum >= 2nd parm
//E:
//P:
function minimumSteps(numbers, value){
    //sort ascendingly
    //delcare sum var
    //loop through the arr and keep reassigning the sum till the condition evaluates to false then it stops
    //return i which represetn the count of loop
    
    
    let arr = numbers.sort((a,b) => a - b)
    let sum = 0
    for(let i = 0; i < numbers.length; i++){
      sum += arr[i]
      if(sum >= value){
        return i
      }
    }
  }
  console.log(minimumSteps([8,9,10,4,2], 23))