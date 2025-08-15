//str of letters
//str of letters ordered alphabetically with , sparateby wich each letter repeated by n-1 while n represent its position from 1 to 26
//alphaSeq("ZpglnRxqenU") -> "Eeeee,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Nnnnnnnnnnnnnn,Pppppppppppppppp,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Uuuuuuuuuuuuuuuuuuuuu,Xxxxxxxxxxxxxxxxxxxxxxxx,Zzzzzzzzzzzzzzzzzzzzzzzzzz"
//
function alphaSeq (str) {
    //declare a var of arr of alphabetics 
    //split the passed str sort it then map through
    //return each el upperCased concatenated with same el repeated num of times
    //based on its index within the alphabetics
    let alphabetics = "abcdefghijklmnopqrstuvwxyz"
    return str.toLowerCase().split('').map(el => el.toUpperCase() + el.repeat(alphabetics.indexOf(el))).sort().join(',')
  }
  console.log(alphaSeq('ZpglnRxqenU'))