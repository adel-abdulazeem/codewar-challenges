//write a func that takes a str it should calc how many times the words sand, water, fish, sun appear without overlapping 

// str, always valide, lower&upper case letters
// return the count of how many [sand, water, fish, sun] appear in the str

// declare a var of words = [sand, water, fish, sun]
// declare a var of str which holds the val of the param converted to lowercase
// declare a count = 0; 
// declare a var of i = 0

function sumOfAbeach(input){
  // Normalize to lower case for case-insensitive matching
  let str = input.toLowerCase()
  let words = ['sand', 'water', 'sun', 'fish']
  let count = 0
  let i = 0
  while( i < str.length){

    let isMatched = false
    for(const char of words){
        if(str.startsWith(char, i)){
            count++
            i += char.length
            isMatched = true
        }
    }
      if(!isMatched){
            i++
        }
  }
  return count
}

console.log(sumOfAbeach("WAtErSlIde"))
console.log(sumOfAbeach("GolDeNSanDyWateRyBeaChSuNN"))
console.log(sumOfAbeach("gOfIshsunesunFiSh"))
console.log(sumOfAbeach("cItYTowNcARShoW" ))

