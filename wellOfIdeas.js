//P: arr of arrays of str of 'good' || 'bad' sub arr not the same length all inputs maybe not be str
//R: certain str upon certain condition 'Publish' ||  'I smell a series!' || 'Fail'
//E: 
//P: 


function well(x){
    //declare a var of count
    //loop through the parent arr then loop through the given arr
    //conditional to reassign var
    let countGood = 0
    for(let i = 0; i < x.length; i++){
          x[i].map(item => typeof item == 'string'? item.toLowerCase() : 0).map( item => item == 'good'? countGood += 1 : countGood)
    }
    return countGood == 1 || countGood ==2? 'Publish!' : countGood > 2 ? 'I smell a series!' : 'Fail!'
  }
  
  console.log(well([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']]))