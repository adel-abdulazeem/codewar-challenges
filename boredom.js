//P: obj of names as a property and their department as val
//R: String upon conditional of calc score
//E: 
//P: declare an obj of teams with each department name as a property and their val
//declare another var of score
//assign to it Object.key to given obj which give us arr of the key that represent the names
//loop through this arr




function boredom(staff){
    var teams = { 
    'accounts'      : 1,
    'finance'       : 2 ,
    'canteen'       : 10, 
    'regulation'    : 3, 
    'trading'      : 6, 
    'change'        : 6,
    'IS'            : 8,
    'retail'        : 5,
    'cleaning'      : 4,
    'pissing about' : 25
  }
  
    let score = Object.keys(staff).map(key => teams[staff[key]]).reduce((a,b) => a + b, 0)
    return score <= 80? 'ill me now' : score < 100 && score > 80? 'i can handle this' : 'party time!!'
  }
  


