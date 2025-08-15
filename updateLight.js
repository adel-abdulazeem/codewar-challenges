//You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.


//P: str of color
//R: str of another color
//E: 
//P: 
function updateLight(current) {
    //conditional 
    return current == 'green' ? 'yellow' : current == 'yellow' ? 'red' : 'green'
  }