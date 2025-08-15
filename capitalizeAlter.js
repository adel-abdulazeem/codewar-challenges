


//captlize char of given str alternatively
//P: str of lowercase letters
//R: arr of 2 resulted elements
//E: 
//P:


function capitalize(s){

    //declare 2 var asign val to them one applied to even indices and the other assigened to 
    //map through each item and captalize it if it's even otherwise return item
    
    let cpatalizeEvn =  s.split('').map((item,index,arr) => index % 2 == 0? item.toUpperCase() : item ).join('')
    let capitalizeOdd = s.split('').map((item,index,arr) => index % 2 !== 0? item.toUpperCase() : item ).join('')
  
    return [cpatalizeEvn,capitalizeOdd]
  };
  
  console.log(capitalize('abracadabra'))
  