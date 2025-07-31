// write a func takes arr of str of letters of same type with diff length then return new arr where each el length is equal to the average length for thel of the input arr
// will receive an arr input, with str el which are letter same type diff lenght, always valid, always string, always for arr
// return new arr of el where each el length == calc average 
// 
function averageLength(array) {
    let average = Math.round(array.reduce((acc, c) => acc + c.length, 0) / array.length)
    return array.map(el => el[0].repeat(average))
}

console.log(averageLength(["aa", "bb", "ddd", "eee"]), ['aaa', 'bbb', 'ddd', 'eee'])
console.log(averageLength(['u', 'y']), "It should work for ['u', 'y']")
console.log(averageLength(['aa', 'bbb', 'cccc']), ['aaa', 'bbb', 'ccc'])
console.log(averageLength(['aa', 'bb', 'ddd', 'eee']), ['aaa', 'bbb', 'ddd', 'eee'])
