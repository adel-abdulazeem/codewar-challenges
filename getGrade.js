//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

//P: 3param of num value
//R: str depending on the result of a comparison
//E: getGrade(100,85,96)--> A
//P: 


function getGrade (s1, s2, s3) {\
    // declare a var holds the calc val of the average
    //conditional
    let average = (s1+s2+s3)/3
    return average < 60 ? 'F' : average < 70? 'D' : average < 80? 'C':
           average < 90 ? 'B' : 'A'
  }
  
  console.log(getGrade(100,85,96))