// function 
// str of n lines, each substr is n char long
//

function vertMirror(strng) {
    let arr = strng.split('\n')
    return arr.map(el => el.split('').reverse().join('')).join('\\n')
}

// console.log(vertMirror("abcd\nefgh\nijkl\nmnop"))
function horMirror(strng) {
    let arr = strng.split('\n')
    return arr.reverse().join('\\n')
}
console.log(horMirror("abcd\nefgh\nijkl\nmnop"))


function oper(fct, s) {
    return fct(s)
}