

//Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

//P: array of str
//R: new array of contcatenated items
//E: 
//P: 

function spacey(array) {
    //declare a var
    //map through the each el concatenating it to the var 
    //returning array of results
    let result = ''
    return array.map(item => result += item)
  }