// str of words  || hexamdecimal
// hexadecimal str, text 
/*Converter.toHex("Look mom, no hands")
=> "4c6f6f6b206d6f6d2c206e6f2068616e6473"
*/

function toHex(str){
    //split
    // loop converting each char to binary 
    // then convert each binary of each char to hexadecimal
    return str.split('').map(el => el.charCodeAt().toString(16)).join('')
    }
    console.log(toHex("Look mom, no hands"))
    
    function toAscii(hex){
      // declare a var of ''
      // loop 
      // decalare a var of ''
      let str = ''
      for(let i = 0; i < hex.length; i += 2){
        let part = hex.substr(i,2)
        str += String.fromCharCode(parseInt(part,16))
      }
      return str;
    }
    console.log(toAscii('4c6f6f6b206d6f6d2c206e6f2068616e6473'))