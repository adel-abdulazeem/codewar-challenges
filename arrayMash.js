//P: 2 arr one is an arr of letters and the other is an arr of nums both arrs are of the same length
//R: new arr that has alternating el from the 2 given arrs
//E: eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']
//P:
function arrayMash (array1, array2) {
    //declare a var of []
    //loop to reassign the declared var by pushing el from each arr each time 
    //return the declared var after being reassigned through looping
    let arr = []
    for(let i = 0; i < array1.length; i++){
      arr.push(array1[i], array2[i])
    }
    return arr
  }
  
  console.log(arrayMash([1,2,3],['a','b','c']))

