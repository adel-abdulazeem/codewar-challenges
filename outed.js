


//P: 2 param, 1st is obj, 2nd is str
//R: str based on conditional
//E: 
//P:




function outed(meet, boss){
    //declare a var and assign an empty arr to it
    //loop through the obj properties
    //conditional bet obj prop name and boss param val if its true, then push   its val duplicaated otherwise push the prop val to the score arr
    //reduce score arr by collecting its el 
    //getting arr of the properties of the object using Object.keys(meet)
    //then reduced score divided by the length of the properties arr of the object
    //conditional
    let score = []
     for(let num in meet){
      [num] == boss? score.push(meet[boss] * 2) :
      score.push(meet[num])
     }
     return score.reduce((acc,c) => acc + c,0)/Object.keys(meet).length <= 5 ?  'Get Out Now!' : 'Nice Work Champ!'
    }
  
    console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'))