// arr of subarrs of 2 el one represent the char and the second represen tthe count
// runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
 // => [[34,'a'], [3,'b']]
// 
var runLengthEncoding = function(str){
    // declare var of []
    // loop then declare a var count = 1
    //  conditional to reassign the count 
    let count = 1
    let arr = []
    for(let i = 0; i < str.length; i++){
      if(str[i] == str[i+1]){
        count++
      } else{
        arr.push([count, str[i]])
        count = 1
      }
      }
    
    return arr
  }
  
  console.log(runLengthEncoding("hello world!"))
  console.log(runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
  ) // => [[34,'a'], [3,'b']]
  console.log(      runLengthEncoding("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW"),
  )//      [[12,'W'],[1,'B'],[12,'W'],[3,'B'],[24,'W'],[1,'B'],[14,'W']]