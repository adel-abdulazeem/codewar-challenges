// func takes arr of nums +ve intg => arr of the reduce simplest 

function reduce(fraction) {
    //loop 
    res  = 1
    for(let i = 1; i < Math.max(...fraction); i++){
        if(Number.isInteger(fraction[0]/i) && Number.isInteger(fraction[1]/i) ){
            res = i
        } 
    }
    return fraction.map(el => el/res)
  }

  console.log(reduce([45,120]))