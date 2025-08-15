//num 
//function
//var fives = factory(5);       // returns a function - fives
function factory(x){
    return (arr) => arr.map(el => x * el)
  }
  
  console.log(factory())