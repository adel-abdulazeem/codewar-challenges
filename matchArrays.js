//P: 2 arr each arr contains a unique element
//R: calc the num of elements in the 1st arr that is found in 2nd arr
//E: matchArrays(['incapsulation','OOP','array'],['time', 'propert','paralelism','OOP']),1
//P:

function matchArrays(v,r){
    //declare a var that holds the val of the 2nd arr filtered out from the el tha t is in the first
    //subract the the length of the resulted arr from the v length 
    //return the difference 
    let arr = r.filter(el => !v.includes(el))
    return r.length - arr.length
    }
    
    console.log(matchArrays(['incapsulation','OOP','array'],
      ['time', 'propert','paralelism','OOP']))