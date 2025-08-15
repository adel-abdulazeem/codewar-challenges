//P: arr nums in str format
//R: return str each char corresponds with with alphabets in reverse order a=26, z=1 etc
//E:
//P: 

function switcher(x){
    // declare a var of reversed alphabets corresponds the given char
    //loop through the given arr
    const alpha = ' zyxwvutsrqponmlkjihgfedcba!? '
    return x.map(item => alpha[Number(item)]).join('')
}
console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']))




