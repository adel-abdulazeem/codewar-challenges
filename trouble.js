//P: 2 params arr of intgers(x) and target(t)
//R: new arr of intg upon complying a certain condtion of if the sum of any 2 consecutive numbers in the arr is == to target so remove the 2nd num from rt to lt
//E: x = [1, 2, 3, 4, 5] => [1, 3, 4, 5]
//P: 
function trouble(x, t){
    //loop the x arr
    //condtional to determine if the sum of each 2 consecutive == to target
    // then remove that 2nd num of the two
    for(let i = 0; i < x.length; i++){
      if(x[i] + x[i+1] === t){
        x.splice(i+1,1);
        i--
      }
    }
    return x
    }
    
    console.log(trouble([[1, 2, 3, 4, 5]])) 

