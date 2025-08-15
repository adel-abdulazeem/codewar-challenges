//P: might be a str of num adjacent with letter || or num > 60 or letter not valid
//R: str either 'Front-Left', 'Front-Rigtht'..
//E: 
//P:
function planeSeat(a){
    // conditional 
    //loop
   const number = parseInt(a)
   const letter = a[a.length -1]
   if(number > 60 || letter == 'I' || letter == 'J') return 'No Seat!';
  
   return `${number > 20 ? number > 40 ?'Back-' : 'Middle-' : 'Front-'}${letter > 'C' ? letter > 'F' ? 'Right' : 'Middle' : 'Left'}`;
  
  }
  
    let letter = 'Z'
  console.log(letter > 'C' ? letter > 'F' ? 'Right' : 'Middle' : 'Left')
  console.log(planeSeat('4'))