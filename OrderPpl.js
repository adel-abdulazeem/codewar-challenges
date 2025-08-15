//arr of objects each obj contain name an age property
//sorted arr of objects ascendingly 
// function([{name: "John", age: 25}, {name: "Robert", age: 20}]) => [{name: "John", age: 25}, {name: "Robert", age: 20}]
//
var OrderPeople = function(people){
    //using arrow function to sort the arr of ppl ascendingly
    //as we sort the arr according on the age property which is a value then pass 
    //sort method 
    //passing arr function that sorts the arr ascendingly depending on the value of the age
    return people.sort( (a,b)=> a.age - b.age ); //complete this function
  }
  
  console.log(OrderPeople([ { age: 83, name: 'joel' },
    { age: 46, name: 'roger' },
    { age: 99, name: 'vinny' },
    { age: 26, name: 'don' },
    { age: 74, name: 'brendan' } ]))