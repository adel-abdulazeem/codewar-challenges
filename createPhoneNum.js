function createPhoneNumber(numbers){
    // arr of 10 nums bt 0 - 9
    // str in a specific format
    // createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
  // delcare a var of str that holds a str of the specific format
    //loop 
    // replace method to reassign that variable 
    // return reassigned var
    let phNo = "(xxx) xxx-xxxx"
    for(let i = 0; i < phNo.length; i++)
      phNo = phNo.replace('x', numbers[i])
    return phNo
  }


  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
  console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))