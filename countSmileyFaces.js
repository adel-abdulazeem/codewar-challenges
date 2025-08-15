// arr of str 
// num which represent how many that el == ':(' || ';(' found in arr
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
//

function countSmileys(arr) {
    // declare a var of arr of valid smily faces
    // loop filtering upon including a valid smily face from the declared var
    // return the length of the resuulted arr
   let smile =  [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"]
    return arr.filter(el => smile.includes(el)).length
  }
  countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
  
  console.log(countSmileys([':D',':~)',';~D',':)']))
  console.log(countSmileys([';D', ':-(', ':-)', ';~)']))