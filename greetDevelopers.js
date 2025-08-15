// add another prop to each object within an arr

//P: arr of objects 
//R: arr of the same objects but with added new property
//E: 
//P: 






function greetDevelopers(list) {
    //loop through each obj within arr lis
    //add property of greeting
    //using template str to interpolate other prop val into the val of the new prop
    list.forEach(item => {
      item.greeting = `Hi ${item.firstName}, what do you like the most about ${item.language}?`
   })
   return list
 }
 
 console.log(greetDevelopers([
   {
     firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
   },
   {
     firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
   },
   {
     firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
   },
 ]))