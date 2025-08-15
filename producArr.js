
//P: arr of +v intg, arr size, 
//R: arr of the same size of the given arr containing the produce of each 2 element
//E:
//P:

function productArray(numbers){
    //loop through the numbers arr tor return arr of the same length
    //reduce the numbers arr by multiplying all the el with each other
    //the produc is divided by each item
    return numbers.map(item => numbers.reduce((acc,c) => acc * c) / item )
  }
  console.log(productArray([20,12, 3]))