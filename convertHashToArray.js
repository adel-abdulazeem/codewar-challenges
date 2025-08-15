//P: object 
//R: arr of arrs of each object key val pair
//E: {name: 'Jeremy', age: 24, role: 'Software Engineer'} -->[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
//P:
function convertHashToArray(hash){
    //object.entries static method that takes obj as a param
    //Returns arr of arrs of the key val pairs
  return Object.entries(hash)
  }
  
  console.log(convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'}))