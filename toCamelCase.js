// str of worlds dash or underscore delimited words, 1st word capitalized should return captilized
// str in the form of camelCase
//"the-stealth-warrior" gets converted to "theStealthWarrior"
//
function toCamelCase(str){
    // declare a var of value of the given str plited the by '-' \\ "_"
    //then loop through the declared var then nested starting looping from 2nd el converting first letter to upporcase then join
    let arr =  str.split('').map(el => el === '-'? ' ' : el == '_' ? ' ' : el).join('').split(' ')
     return arr.slice(0,1).concat(arr.slice(1).map((el,i) => el[0].toUpperCase() + el.slice(1))).join('')
     }
    
     console.log(toCamelCase("a_PippiWas-cute")) //"TheStealthWarrior"
     console.log(toCamelCase("the-stealth-warrior" )) // "theStealthWarrior"