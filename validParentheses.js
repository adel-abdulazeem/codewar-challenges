//write a func that takes a str of parenth, determine the order of the parenth is valid
// str of parenth, always valid, always parentheses
// return true || false according to the validity of the order


function validParentheses(s){
    // create a var curr == 
    let curr = 0
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
            curr++
        } else{
            curr--
        }
        if(curr < 0){
            return false
        }
    }
    return curr === 0
}

console.log(validParentheses('(())'))
console.log(validParentheses('(())('))