//P: arr of nums || empty
//R: true or false upon condition every el = n + 1 || n -1
//E: 
//P:


function isNice(arr){

    //loop 
    //make comparison
  let counter = 0
  for(let i = 0; i < arr.length; i++){
    if(arr.includes(arr[i] + 1) || arr.includes(arr[i] -1)){
  counter++
    }
  }
  return  counter == arr.length && arr.length != 0 ? true : false
  }
  
  console.log(isNice([]))