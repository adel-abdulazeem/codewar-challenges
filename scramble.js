//P: str&arr of index nums both ar are the same the length
//R: str rearranged in the order specified by the accompanying arr
//E: scramble('abcd', [0,3,1,2]) -> 'acdb'
//P:
function scramble(str, arr) {
    //loop through the str 
    // reassign the declared var with val of the given str with index value we obtain from the given arr
    return arr.map((el, i) => str[arr.indexOf(i)]).join('')
  };
  
  console.log(scramble('abcd', [0,3,1,2]))
