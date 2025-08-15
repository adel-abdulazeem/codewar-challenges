// function that takes a str of letters => returns as str in the shape of triangle
// str of letters, always valid, upperCased
// return a str of one letter
//  triangle('GG')// 'G',  triangle('BR')// 'G'

function triangle(row) {
    // conditional if row.length <= 1 => row
    // declare a var res 
    // loop to reassign res var
    // recursion through resulted res till reaching to final result
    
    if (row.length <= 1) // base case
      return row;
  
    let res = '';
  
    for (let i = 0; i < row.length - 1; i++)
  
      res += row[i] === row[i + 1]
           ? row[i]
           : 'RGB'.replace('G', '').replace(row[i + 1], '');
  
    return triangle(res);
  
  }
console.log(triangle('R R G'))  