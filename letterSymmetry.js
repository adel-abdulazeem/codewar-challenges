//P: arr of letters upper/lower
//R: arr of nums each of which represent the sum of letters that comply with their position in alphabets
//E:
//P:


function solve(arr){  
    //create arr of alphabets
    //create a new arr of the given arr to converty the given arr el into uppercase
    //loop thn split then loop with conditional then loop to reduce
    const alpha = Array.from(Array(26)).map((i,x) => x + 65)
    const alphabets = alpha.map(item => String.fromCharCode(item))
    let newArr = arr.map(item => item.toUpperCase())
   return newArr.map(item =>item.split('').map((item,index) => index == alphabets.indexOf(item)? 1 : 0).reduce((acc,c) => acc + c,0))
    
    
    };
  console.log(solve(["abode","ABc","xyzD"]))