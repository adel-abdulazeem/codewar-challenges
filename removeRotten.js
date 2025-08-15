//remove rotten word from str el of an arr if it's found
//P: arr of str, el might includes 'rotten' word
//R: arr of the same el lowercased without including rotten word if it's found
//E:
//R: 

function removeRotten(bagOfFruits){
    return bagOfFruits !== null && bagOfFruits !== undefined ? bagOfFruits.map(item => item.includes('rotten')? item.slice(6).toLowerCase() : item.toLowerCase()) : []
  }

  console.log(removeRotten([]))
  console.log(removeRotten['rottenBanna'])