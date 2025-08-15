

//P: arr of obj
//R: intg +ve num
//E:
//P:



function getAverageAge(list) {
    //declare a var and assign zero to it
    //loop through el within the arr and reassign the declared var
    //return the rounded of total/by arr length
    let total = 0
    list.forEach(item => total += item.age)
    return Math.round(total/list.length)
  }

  console.log(getAverageAge([
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
  ]))
  