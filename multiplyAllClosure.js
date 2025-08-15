//P: arr of intgers
//R: function which takes a single arg and returns new arr / you must not mutate the original arr
//E: multiplyAll([1, 2, 3])(2) = [2, 4, 6];
//P:
function multiplyAll(arr) {
    //return a function that returns an arr from the the first passed arr to the parent func where each el is multiplied by callback arg
    return function(n){
       return arr.map(el => el * n)
     }
   }