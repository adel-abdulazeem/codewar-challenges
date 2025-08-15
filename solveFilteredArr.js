
//P: 2 str of letters
//R: str not matched in both arrays
//E: 
//P




function solve(a,b){
    //declare 2 var both param spliting resulting arr
    //filter
    //concat the resulted arr 
    //join 
    let filteredA = a.split('')
    let filteredB = b.split('')
    return filteredA.filter(item => !filteredB.includes(item)).concat(filteredB.filter(item => !filteredA.includes(item))).join('')
  };
  
  console.log(solve("xyab","xzca"))