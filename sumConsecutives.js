
function sumConsecutives(s) {
    let result = []

    let  sum = 0
    for( var i = 0; i < s.length; i++){
      sum += s[i];
      if(s[i] != s[i+1]){
        result.push(sum);
        sum = 0;
      }
    }
    return result;
}


console.log(sumConsecutives([1,4,4,4,0,4,3,3,1]))
//[1,12,0,4,6,1]

