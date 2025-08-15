
//P: str of words
//R: new str with 'Fire' replaced by "~~"
//E: 
//P:
function fireFight(s){
    return s.includes('Fire')? s.split(' ').map(item => item == 'Fire'? '~~': item).join(' ') : s
  }
  
  console.log(fireFight('Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast'))