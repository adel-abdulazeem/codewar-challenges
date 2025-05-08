// func tht takes a num should return the num of triangles form out that num

function triangular( n ) {
    // conditional to determine n > 0 
    // and if evaluates to true we should do quick math to calculate the num he equilateral triangular shape that they occupy when laid out as dots. i.e.
    return n > 0 ? n * (n + 1) / 2 : 0;
}

console.log(triangular(3))