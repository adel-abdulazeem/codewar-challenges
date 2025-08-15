//P: 3 param, arr of arrs, num of bags, num of cap
//R: "Clear" or "Cr@p" or "Dog!!"
//E:
//P: 

function crap(x, bags, cap){
    //declare a var and assign it a value of reduced arr
    var yard = x.reduce( (a, b) => a.concat(b) );
    return yard.includes('D') ? 'Dog!!' : bags * cap - yard.filter( val => val === '@' ).length > 0 ? 'Clean' : 'Cr@p';
  }
  
  console.log(crap([["_","_","_","_","_"],["_","_","@","_","_"],["@","_","_","_","_"]], 1, 2))