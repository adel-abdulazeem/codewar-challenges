//P: arr of of arrays each arr contains 2 num intg & >= 0
//: 1st num = who get on, 2nd == get off 
//R: the num of ppl who are still in the bus after last bus stop
//E: 
//(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17)
var number = function(busStops){
    //loop through tthe given arr
    //then loop through each item reducing its el by subtracting each 2 el
    // then loop through resulted of the differences resulting from the map reducing them by making summation returing the num of ppl who are on the bus
    return busStops.map(item => item.reduce((acc,c) => acc - c)).reduce((acc,c) => acc + c,0)
   }
   
   console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))
   console.log(number([[10,0],[3,5],[5,8]]))