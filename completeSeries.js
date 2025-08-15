// arr of not -ve intg, maybe not ordered or contain repeated el
// new arr starting from 0 to the highest intger or [0] if there's repeated item within the input
//[1,4,6] ->    [0,1,2,3,4,5,6]
//

function completeSeries(arr) {

    // 2 loop first with conditional to determine if input arr contains duplicate to return [0]
    //2nd loop to return new arr starting from 0 to max num within input arr
    //declare  a var of []
    //condtional to reassign the declared var 
    // sort the returned var
  let sortedArr = arr.sort((a,b) => b - a)
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == arr[i+1]){
      return [0]
    }
  }
  let result = []
  for(let i = 0; i <= sortedArr[0]; i++){
    result.push(i)
  }
    return result
  }
  
  console.log(completeSeries( [0,2]))