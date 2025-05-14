function validParentheses(s){
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