//func tha ttest the life of an evaparator containing gas
// 3 params, all +ve, representing content, evap_per_day, and threshold 
// return num which nth day 


function evaporator(content, evap_per_day, threshold){ 
    let days = 0
    let remaining = 100

    while (remaining > threshold) {
        remaining -= remaining * (evap_per_day / 100);
        days++;
      }
    
      return days;
  }

  console.log(evaporator(10,10,10),22)