//P: array of nums
//R: single num represent the first num with longest digits
//E: 
//P: 



function findLongest(array){
   //declare a var and assign it to an arr looping through each el returning its length
   //then apply find method with conditional to return the first num with longest digits
    let itemLength = array.map(item => Math.max(String(item).length) )
    return array.find(item => String(item).length == Math.max(...itemLength))
 
   }
  
   console.log(findLongest([222222,103032,111540,33333333]))