//P: num
//R: num in str format with '-' bt each 2 odd digits
//E:
//P: 


function insertDash(num) {
    //convert num into str
    //split it into arr 
    //apply reduce method with param (acc,c,index, arr)
    //apply the condition of inserting '-' bt each odd numbers
    return num.toString().split('').reduce((acc, c, i, arr) => {
      if (i > 0 && Number(arr[i]) % 2 !== 0 && Number(arr[i - 1]) % 2 !== 0)
        acc = acc + '-';
      
      return acc + c;
    },'');
  }
  
  console.log(insertDash('151793'))