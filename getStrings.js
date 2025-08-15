//P: str
//R: Str that shows how many each letter withen the given str appears using asterisks, no dashes, spaces apostrophes, different leters spearated by ","
//E: "Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
//P:
function getStrings(str){
    let result = {}
  let city = str.toLowerCase().split(' ').join('')
    for(let i = 0; i < city.length; i++){
      let count = 0
      for(let j = 0; j < city.length; j++){
        if(city[i] === city[j]){
          count += '*'
          result[city[i]] = count.slice(1)
        }
      }
  
    }
    return Object.entries(result).map(el => el.join(':').trim()).join(',')
  
  }
  console.log(getStrings("Las Vegas"))