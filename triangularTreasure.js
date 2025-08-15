// func tht takes a num should return the num of triangles form out that num

function triangular( n ) {
    // conditional to determine n > 0 
    // and if evaluates to true we should do quick math to calculate the num he equilateral triangular shape that they occupy when laid out as dots. i.e.
    return n > 0 ? n * (n + 1) / 2 : 0;
}

console.log(triangular(3))

function* generateSequence(){
    //yeild multiple values, on after another, on demand.
    // allowing to create data streams with ease
    yield 1;
    yield 2;
}
let generator = generateSequence();
for(let value of generator) {
  console.log(value); // 1, then 2
}

// let one = generator.next();
// console.log(JSON.stringify(one))

// let two = generator.next();
// console.log(JSON.stringify(two))
// let three = generator.next();
// console.log(JSON.stringify(three))



/*
 behave differently from regular ones. When such function is called, 
 it doesn’t run its code. 
 Instead it returns a special object, 
 called “generator object”, to manage the execution.
 */