  //Given a list of integers, determine whether the sum of its elements is odd or even.
  function oddOrEven(array) {
    return array.reduce((acc,c) => acc + c, 0) % 2 === 0? 'even' : 'odd'
    }