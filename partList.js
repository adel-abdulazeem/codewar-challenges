//P: arr of str
//R: new arr of containing arrs each of which consists of 2 el concat
//:
//P:

function partlist(arr) {
    //decalre a var and assign it to an empty arr
    //loop through the given arr starting from 1 index
    //push the 1st el  which is slice from the given arr then joined
    //push the 2nd el wich is sliced from the given arr then joined
    
    let returnArray = [];
    for( let i = 1; i < arr.length; i++){
     let newArray = [];
      newArray.push(arr.slice(0,i).join(" "));
      newArray.push(arr.slice(i).join(" "));
      returnArray.push(newArray);
    }
    
    return returnArray;
  }
  
  console.log(partlist(["az", "toto", "picaro", "zone", "kiwi"]))
  console.log(["az", "toto", "picaro", "zone", "kiwi"].slice(1))