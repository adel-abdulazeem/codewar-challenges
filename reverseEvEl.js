//P: str, might contains trailing or leading whitespace.
//R: str where every other word is reversed from the given str
//reverse("Reverse this string, please!"), "Reverse siht string, !esaelp"
//

function reverse(str){
    //delare a var of arr []
    //loop filtering then reverse el starting from the 2nd el 
    //join
    let result = []
    let arr = str.trim().split(' ')
   result.push(arr.slice(0,1).join(''),arr.slice(1).map((el,i) => i % 2 == 0?el.split('').reverse().join('') : el).join(' '))
   return result.join(' ')
  }
  
  console.log(reverse(" Reverse this string, please!  ")) //"Reverse siht string, !esaelp"