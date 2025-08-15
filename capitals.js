//Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

//extracts capital letters from a sring and return array of results
//P: string with upper and lower case
//R: arr of indices of uppercase letters within the str argument
//E:
//P:


var capitals = function (word) {
    //split the argument into letters
    //map through the elements of the resulted arr
    //conditionals to return target index
    //filter based upon target char
    
    return word.split('').map((item,index,arr) => item == item.toUpperCase()? index : '').filter(item => item !== '')
  };
  
  console.log(capitals('CodEWaRs'))