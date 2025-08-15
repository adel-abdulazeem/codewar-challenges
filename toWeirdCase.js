// str of letters
// return the same str where even indexed char upperCased in each word vice versa for odd indexed char
//"Weird string case" => "WeIrD StRiNg CaSe"
//
function toWeirdCase(string){
    // split by ' '
    // loop througgh the resulted arr then loop through each el to convert each even indexed char to upper case and vice versa
    return string.split(' ').map(el => el.split('').map((val,i) => i % 2 == 0? val.toUpperCase() : val.toLowerCase()).join('')).join(' ')
  }
  console.log(toWeirdCase("Weird string case"))
  console.log(toWeirdCase("String"))