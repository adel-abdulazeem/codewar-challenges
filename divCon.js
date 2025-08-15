
//P: arr contains num and str of nums
//R: a num represent subtraction sum of the num el  from the sum of the str el of nums
//E: 
//P:
function divCon(x){
    //filter the items of typeof == 'number' adding tthem to each other
    // subract from them the filtered el as str of nums converting them to num
    
    return x.filter(item => typeof item == 'number' ).reduce((acc,c) => acc + c) - x.filter(item => typeof item == 'string').map(item => Number(item)).reduce((acc,c) => acc + c)
    }
  
    console.log(divCon([9, 3, '7', '3']))