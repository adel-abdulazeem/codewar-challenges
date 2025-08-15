

//P:2 params 1st is num that represent the widh and 2nd is a str that represent ration
//R: str that represent the aspect ratio based on the passed width and the given ratio
//E: (1024,"4:3"), "1024x768")
//P:

function findScreenHeight(width, ratio) {
    //splite the ratio stry by ':' the map returning the number of each el
    //claculating the height based on result of dividing the height by width within the given ratio then multiplying it with arg to get the height
    let calcHeight = ratio.split(':').map(el => Number(el))
    let height = calcHeight[1] / calcHeight[0] * width
    return `${width}x${height}`
  }
  
  console.log(findScreenHeight(1024,"4:3"))