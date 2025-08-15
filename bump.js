//P: str
//R: another str upon specific condition 
//E: bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead")
//P: 



function bump(x){
    // split the given arr into an arr of el
    //declare a count var
    //looop through the arr el 
    //conditional upon which the var is reassigned
    //return a str upon the val of the reassigned count 
    let arr = x.split('')
    let count = 0
    for(let i = 0; i < arr.length; i++){
      arr[i] == 'n'? count += 1 : count += 0
      }
      return count <= 15? 'Woohoo!' : "Car Dead"
    }