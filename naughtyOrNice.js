// write 2 func one returns nice names and the returns naughty names
// arr of objects where each obj has 2 props name which is str and wasNice which is boolean
// g return an arr of els which are the val of the name prop in each object
// 





function getNiceNames(people){
    //loop through input arr 
    // conditional to return an arr of the value of the name prop if wasNice prop is true otherwise []
    // filter method 
    return people.filter(el => el['wasNice']).map(el => el['name']) || []
  }
  
  function getNaughtyNames(people){
    return people.filter(el => el['wasNice'] !== true).map(el => el['name']) || []
  }

 const ppl =  [
    { name: 'Warrior reading this kata', wasNice: true },
    { name: 'xDranik', wasNice: false },
    { name: 'Santa', wasNice: true }
] 
  console.log(getNaughtyNames(ppl))// return [ 'xDranik' ]
  console.log(getNiceNames(ppl)) // return [ 'Warrior reading this kata', 'Santa' ]