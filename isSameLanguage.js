


//P: arr of obj
//R: boolean
//E: 
//P: 

function isSameLanguage(list) {
    //declare a var and assign it to empty arr
    //loop through each item and push the item prop val to the arr
    //filter 
    //conditional
    let arr = []
     list.forEach(item => arr.push(item.language))
     return arr.filter((item,index,arr) => index == arr.indexOf(item) ).length == 1? true : false
  }
  
  console.log(isSameLanguage([
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Javacript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
  ]))