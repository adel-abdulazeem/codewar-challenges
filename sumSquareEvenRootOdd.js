const sumSquareEvenRootOdd = ns => {
    return Math.round(
    ns.reduce((acc, c) => {
      if(c % 2 === 0){
        return acc + Math.pow(c,2)
      } else{
       return  acc +  Math.sqrt(c)
      }
    }, 0) * 100
)/100
  };

  console.log(sumSquareEvenRootOdd([4,5,7,8,1,2,3,0]))
  console.log(sumSquareEvenRootOdd([1,14,9,8,17,21]))