// str of words 
// str of words with length > 2 with 1st letter captilized 
// "apple"            => "Apple"
//
function dropCap(n) {
    // declare a var of splited given str by ' '
    //loop through that var 
    //consdtional 
    return  n.split(' ').map(el =>  el.length > 2? el.slice(0,1).toUpperCase() + el.slice(1).toLowerCase() : el).join(' ')
    
    }
    
    console.log(dropCap('Apple Banana'))