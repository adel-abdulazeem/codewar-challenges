// func creates password from a str which a memorable sentence by taking the 1st letter of each word then replace specific letter non-case sensitive with specfiic nums
// str of words, letters can be lower and uppercase, always valid, always str
// always return a str
// 

function makePassword(phrase) {
    //extract the 1st letter of each word in the sentence
    // then replace the letter if it's:
    // o || O with 0
    // && i || I with 1
    // && s || S with 5
    // create a var arr tht hold arr of words from split param by space
    // then loop and conditional to transform each letter with corres case
    return phrase.split(' ').reduce((res, arr) => {
        if('Ii'.includes(arr[0])){
            return  res += '1'
        } else if('oO'.includes(arr[0])){
            return  res += '0'
        }else if('sS'.includes(arr[0])){
            return  res += 5
        } else{
            return res += arr[0]
        }
    }, '')

  }

  console.log(makePassword("Give me liberty or give me death"), "Gml0gmd")
  console.log(makePassword("Keep Calm and Carry On" ), "KCaC0")