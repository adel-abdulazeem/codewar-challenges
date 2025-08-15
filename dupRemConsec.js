//P: arr of str
//R: new arr of str where all consecutive duplicate letters removed from each str
//dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
//
function dup(s) {
    //loop through the given arr 
    //then loop through each el to remove the consecutive duplicate letters 
    return s.map(el => el.split('').filter((a,i) => el[i] !== el[i+1]).join(''))
      
      };
    
      console.log(dup(["abracadabra","allottee","assessee"]))