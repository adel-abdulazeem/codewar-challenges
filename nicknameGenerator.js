function nicknameGenerator(name){
    // var that holds the vowel letters as a val
    // loop through the given name and determine if it contains vowe at the 2nd index
    //conditional 
    const vowel = 'aeiou'
  for(let i = 0; i < name.length; i++){
    if(name.length <4){
      return "Error: Name too short"
    }
    else if(vowel.includes(name[2])){
       return name.slice(0,4)
    }else{
     return  name.slice(0,3)
    }
  }
  }