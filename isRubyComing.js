

//P: array of objects
//R: true || false
//E:
//P:

function isRubyComing(list) {
    //loop through the list arr using some method
    //some method of an arr that check that one el passed the implemented condtion
    //
    return list.some(item => item.language === 'Ruby' )? true : false
  }
  
  
  
  
  
  console.log(isRubyComing([
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' } 
  ]
  ))
  