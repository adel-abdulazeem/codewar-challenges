
// func returns template string
//P: rest parameter of an array with string elements
//R: template literal computing the arguments and joining them each separated by ',' and ' '
//E: 
//P:
function buildString(...template){
    //back ticks
    //inside back ticks bling followed by {}
    //for computing the the arguments then joining them
    //each seprated by , & ' '
    return `I like ${template.join(', ')}!`;
  }
  buildString('Cheese','Milk','Chocolate')
  buildString('Chocolate')