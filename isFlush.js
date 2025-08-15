
function isFlush(cards) {
    //P: arr of 5str
    //R: boolean
    //E: 
    //P:
    //loop using every method 
    return cards.every(a=>cards[0].slice(-1)===a.slice(-1))
  }
  
  console.log(isFlush([  "QD", "4D", "10D", "KD", "5D" ]))
  
  console.log('55445'.lastIndexOf('5'))
  console.log('kjfdkj'.slice(-1))