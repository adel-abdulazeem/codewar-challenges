// func takes arr of seq of dimenstions of rect & circles => new seq sorted ascending by area
// arr of el & sub arr of 2 el(width, length)
// new sorted arr version fromt the given arr
// const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]
//
// area of rect = width * length, area of circle = r*r * 3.14
function sortByArea(array) {
    //declare a var of the calculated area for each el 
    // sort 
    let areas = array.map(el => typeof el === 'number'? [el, el * el *3.14] : [el, el[0] * el[1]])
    return areas.sort((a,b) => a[1] - b[1]).map(el => el[0])
  }
  console.log(sortByArea([ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]))