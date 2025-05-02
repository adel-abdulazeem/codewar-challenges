//func tha ttest the life of an evaparator containing gas
// 3 params, all +ve, representing content, evap_per_day, and threshold 
// return num which nth day 


function evaporator(content, evap_per_day, threshold){ 
    let days = 0
    let limit = content * (threshold/100)
    let current = content
    while (current > limit) {
        current -= current * (evap_per_day / 100);
        days++;
      }
    
      return days;
  }

  console.log(evaporator(10,10,10),22)