//P: str might contain not unique char
//R: true if all the char are unique otherwise the false
//E: output --> ("  nAa"),false)/ output --> ("abcdef"),true)
//P: 


function hasUniqueChars(str){
    //split the given str
    //loop through each item using every method upon applying a condition 
    return str.split('').every((item,index,arr) => arr.indexOf(item) == index)
   }