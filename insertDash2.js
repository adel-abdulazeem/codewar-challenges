//P: num in number format
//R: '-' bt each 2 odd digits & '*'  bt each even num
//E: 
//P:


function insertDashII(num) {
    //
    let arr = num.toString().split('')
    for(let i = 0; i < arr.length; i++)
      if((arr[i] > 0 && arr[i+1] > 0 && arr[i] % 2 == 0 && arr[i+1] % 2 == 0)){
              arr[i] += '*'
      }else if((arr[i] % 2 > 0 && arr[i+1] % 2 > 0)){
              arr[i] += '-'
      }
    return arr.join('')
  }
  
  console.log(insertDashII(40546793)) //--> 4054*67-9-3