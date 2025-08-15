//P: arr of letters etheir 'a', "b", "c"
//R: boolean upon if the array contains 2 or 3 of the same vale
//E: 
//P: 
console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"])) //--> true

function checkThreeAndTwo(array) {
    //declare 3 var matchin the num of type of el within the given arr
    //loop 
    //condiitional
    //reassigning the var upon each condition evaluates to true
    let a = 0
    let b = 0 
    let c = 0
    for(let i = 0; i < array.length; i++){
      if(array[i] == 'a'){
        a++
      }else if(array[i] == 'b'){
        b++
      }else if(array[i] == 'c'){
        c++
      }
    }
    return (a === 2 || b === 2 || c == 2) && (a === 3 || b === 3 || c == 3)
   }