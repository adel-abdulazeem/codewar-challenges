function isPangram(string){
    // loop through the alphabetics
    // using every 
    // string to lower case 
    //conditional if each letter in the given str included in the alphabetics
return 'abcdefghijklmnopqrstuvwxyz'
       .split('')
       .every(el => string.toLowerCase().includes(el))

}

console.log(isPangram("The quick brown fox umps over the lazy dg"))
console.log(isPangram('abcdefghijklmopqrstuvwxyz'))