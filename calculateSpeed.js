


function calculateSpeed(distance, time) {
    let calcDist =  Number(distance.replace(/\D+/g, ''))
    let calcTime = Number(time.replace(/\D+/g, ''))
    let dist = distance.includes('km')? calcDist * 0.621371 : calcDist * 0.000621371
    let period = time.includes('min')? calcTime/60 : calcTime/(60*60)
    return ` ${Math.round(dist / period)}mph`
  }
  
  console.log(calculateSpeed("100m", "10s"))