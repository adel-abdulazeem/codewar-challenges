//P: arr of nums
//R: str
//E: 
//P: 






var ArrowFunc = function(arr) {
    return arr.map( item => String.fromCharCode(item) ).join(''); //Complete this function
  } 

  console.log(ArrowFunc([84,101,115,116]))