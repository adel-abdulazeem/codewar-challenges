Math.roundTo = function (number, precision) {
    // TODO: Program Me
    const factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor
}


console.log(Math.roundTo(3.1415926535, 2))
/**
 Math.roundTo = function (3.1415926535 , 2) {
  // TODO: Program Me
  const factor = Math.pow(10, 2); = 100
  return Math.round(3.1415926535 * 100)/100 = 3.14
}
 */