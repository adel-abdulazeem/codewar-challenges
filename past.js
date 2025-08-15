//Clock shows h hours, m minutes and s seconds after midnight.


//P: 3 param 1st of hrs 2nd num of min 3rd num of sec
//R: num of milisec
//E: 
past(1,1,1) //-->3661000
//P:
function past(h, m, s){
    //return h multiplied by 60*60*1000 added to m*60*1000 added to s*1000
    return h*60*60*1000 + m*60*1000 + s*1000
  }