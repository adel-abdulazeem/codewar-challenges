//P: str
//R: str with abbrev middle names
//E: 
//P:



function initializeNames(name){
    //declare 2 var 
    //one as arr after spliting name str
    //the other for removing the 1st and last name
    //then map through the sliced arr and process its el so it could be abbr
    //conditional
    //then return 
    let arr = name.split(' ')
    let init = arr.slice(1,-1).map(item => item.charAt(0) + '.').join(' ')
    return arr.length > 2? [arr[0],init,arr[arr.length -1]].join(' ') : name
  }
  
   console.log(initializeNames('Mary kjkjh Lane'))