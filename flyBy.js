//P: 2 params in form of str lamps & drone
//R: str of 'xxxo'
//E: 
//P: 
function flyBy(lamps, drone){
    //declare 2 var and split each given arg to return an arr
    //loop through the resulted arr of lamps 
    //conditional to reassign the el of the lampsArr
    //join the el of resulted arr from looping 
      let lampsArr = lamps.split('')
      let droneArr = drone.split('')
    return lampsArr.map((item,index) => droneArr[index] == '=' ||droneArr[index] == 'T' ? 'o' : item).join('')
    }
    console.log(flyBy('xxxxxx', '====T'))