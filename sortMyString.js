

//P: str of words
//R: str of letters grouped into even and odd index
//E:
//P:




function sortMyString(S) {
    let even = S.split('').filter((item,index,arr) => index % 2 === 0).join('')
    let odd = S.split('').filter((item,index,arr) => index % 2 !== 0).join('')
  return `${even} ${odd}`
}

console.log(sortMyString('CodeWars'))