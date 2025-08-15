//arr of words 
// new sorted arr alpha
//["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
//

sortme = function( names ){
    return  names.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()))
   }
   
   console.log(sortme(["Hello", "there", "I'm", "fine"] ))
   console.log('dka'.split().sort())