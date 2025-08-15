// function takes 2 obj params => a new obj combines all input objecs
// multple params  in the form object, have only numberic val, objects combined together so that matching keys are added together
// new object with mutating the input objects
// combine({ a: 10, b: 20, c: 30 }, { a: 3, c: 6, d: 3 }) // Returns { a: 13, b: 20, c: 36, d: 3 }
// 

function combine(objA, objB, objC, objD ) {
    // declare a var obj  {}
    // for loop to through the arguments object which object like an arr
    // for in to loop through each object in the arguments 
    // then reassign the obj var
    // return it 
    let obj = {}
for(var i = 0; i < arguments.length; i++){
    for(var key in arguments[i]){
        obj[key] = obj[key] ? obj[key] + arguments[i][key] : arguments[i][key]
    }
}
return typeof obj
 }

  console.log(combine({ a: 10, b: 20, c: 30 }, { a: 3, c: 6, d: 3 }))
