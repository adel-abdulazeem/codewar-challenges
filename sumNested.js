const sumNested = arr => {
    let sum = 0
    for(let el of arr){ 
    if(Array.isArray(el)){
       sum += sumNested(el)
    } else {
       sum +=el
    }
    }
    return sum
  };

console.log(sumNested([1, [2, [3, [4]]]]))

// [1, [2, [3, [4]]]].reduce((0, 1) => 0 + sumNested(1))