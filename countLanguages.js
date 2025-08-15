

//P: arr of obj
//R: obj with property value pair
//E: 
//P:


function countLanguages(list) {
    //declare a var and assign an empty obj to it
    //loop through list arr 
    let count = {}
    list.forEach(item => count[item.language] = (count[item.language] || 0) + 1)
  
    return count
  }
  
  console.log(countLanguages([
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
  ]))