// str of num represent yr
// new str that represent the century
// "1999" --> "20th"
//
function whatCentury(year){
    var century = Math.ceil(year / 100);
    if (century > 10 && century < 20) return century + "th";
    switch (century % 10) {
      case 1: return century + "st";
      case 2: return century + "nd";
      case 3: return century + "rd";
      default: return century + "th";
    }
  }
  
  console.log(whatCentury(2011))
  