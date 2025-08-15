

//P: arr of num 
//R: num that respresent how many occurences of the most repeated num
//E: 
//P:

function stantonMeasure(array){  
    //count =  how many times the 1 occurs
    //stanton = how many times the val of count
    const count = array.filter(num=>num === 1).length;
    const stanton = array.filter(num=>num === count).length;
  
    return stanton;
  }
  console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]))