
// reverse words 
//P: string, might be empty
//R: return reversed words 
//E: 
function reverse(string){
    // split string by space.
    // reverse the order of the elements of the splitted array.
    // join the reversed the elements of the array into one string each element element separated by a space.
    return string.split(' ').reverse().join(' ')
  }

  reverse("Hi There.") //-->"There. Hi"
  reverse("Hello World") //--> "World Hello"