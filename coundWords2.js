// count words
//P: string of words, white space in between
//R: number of the words in string
//E: 
//P: 
function countWords(str) {
    //trim str to remove white space
    //conditionals to handle string if it is empty
    //split str using regex as delimiter
    //length property of the resulted array
    str = str.trim()
    if( str == 0){
      return 0
    };
    return str.split(/\s+/).length;
  }
  
  