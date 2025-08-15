// num, ingt
// arr of of el each is "*"
//3 => [ "  *  "," *** ", "*****"]
//

function towerBuilder(nFloors) {
    // delcare a var of []
    // loop to reassign it 
    let result = []
    for(let i = 0; i < nFloors; i++){
      result.push(' '.repeat(nFloors - i - 1) + "*".repeat((i*2)+1) + ' '.repeat(nFloors - i - 1)) 
    }
    return result
  }
  
