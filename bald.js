  //P: str of dashes and forward slashes '-' represent clean shaved however '/' represent stray 
  //R: arr of 2 str first one for is str of dashes filterout from slashes and 2nd is a str upon a certain condition of the num of the slashes
  //E:bald('/---------'), ['----------', 'Unicorn!']
  //P: 
  function bald(x){
    //split the given  str by '/'
    //calculate the num of stray by subracting the length of  given str splited by '/' then joined from the given str length 
    //declare a var that represent the second el within the returned arr calculated based on conditional
    //return arr of 2 el the first repesent the given str filtered out from slashes and 2nd represent the str val of the stray str calcualed base on condtional 
    let fitlterStr = x.split('').map(el => el == '/'? '-': el).join('')
    let strayNum = x.length - x.split('/').join('').length
    let strayStr = strayNum === 0? 'Clean!' : strayNum == 1? 'Unicorn!':
        strayNum == 2 ? "Homer!" :  strayNum <= 5 ? "Careless!" : "Hobo!"
    return [fitlterStr, strayStr]
  }

  console.log(bald('--/--/---/-/---'))

  console.log("-------------".length)