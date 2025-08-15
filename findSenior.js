// arr of obj, valid, never emplty
// arr of objects with age val the largest
//
var list1 = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
  ]; 
  //
  
  
  function findSenior(list) {
    
    // declare  a var of []
    // declare a var of extract the max age value
    // loop with conditional to reassign the result
  let result = []
  let maxage = Math.max(...list.map(el => el.age))
  for(let key in list){
    if(list[key].age == maxage){
       result.push(list[key])
    }
  }
  return result
  }
  console.log(findSenior(list1))