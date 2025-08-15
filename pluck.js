//P: arr of obj and str
//R: arr of values that represent each property name val 
//E: pluck([{a:1}, {a:2}], 'a')      // -> [1,2]
//

function pluck(objs, name) {
    //loop through the given arr passing a func that return an arr of obj with the value of the name 
    return objs.map(el => el[name])
    }
    
    console.log(pluck([{a:1}, {a:2}], 'a'))