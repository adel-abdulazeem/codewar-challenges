//arr of str or "", null or undefined, 0
//new arr without falsy values
// var originalArray = ['click1','click2',null,'','','submitForm'] => ['click1', 'click2','submitForm'] 
//
function squeakyClean(arr) {
    //loop filtering out falsy values
    return arr.filter(el => el != undefined && el != null && el != 0)
  }
  
  
  console.log(squeakyClean(['click1','click2',null,'','','submitForm']))
  
  console.log()