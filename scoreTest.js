function scoreTest(str, right, omit, wrong){
    let corr = 0
    let incorr = 0
    let om = 0
    for(let i = 0; i < str.length; i++){
      if(str[i] === 0){
        corr+= 1
      }else if(str[i] === 1) {
        om += 1
      } else if(str[i] === 2){
        incorr += 1
      }
    }
    return (corr * right) +  (om * omit) - (incorr * wrong)
}    