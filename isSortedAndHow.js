//P: arr of nums +/-
//R: str based on conditional
//E:
//P:

function isSortedAndHow(a) {
    //declare a var and assign it a val of str of joined a
    //conditinals
    const s = a.join``;
    return s === a.sort((x, y) => x - y).join`` ? 'yes, ascending' :
           s === a.sort((x, y) => y - x).join`` ? 'yes, descending' : 'no';
  }
  
  console.log(isSortedAndHow([15, 7, 3, -8]))
  
  
  console.log([15, 7, 3, -8] == [15, 7, 3, -8].sort((a,b) => a - b))