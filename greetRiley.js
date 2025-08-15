//P: str upper/lower case
//R: str include a word and name with 1st letter uppercased
//E:
//P: 

var greet = function(name) {
    //declare a var 
    let newName = name.charAt(0).toUpperCase()+name.toLowerCase().slice(1)
    return `Hello ${newName}!`
    };

    console.log(greet('ricky'))