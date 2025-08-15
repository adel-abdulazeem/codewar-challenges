//P: str of letters 
//R: arr of letters beginning from the index 1 of all even char == odd index || "invalid string" if the given str length is < 2 || > 100
//E: "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
//P:
function evenChars(string) {
    //conditionals 
    //then split
    //then filter upon a certain condition
    return string.length < 2 || string.length > 100 ? "invalid string" : 
    string.split('').filter((el,index) => index % 2 != 0)
    }
  console.log(evenChars("a"))