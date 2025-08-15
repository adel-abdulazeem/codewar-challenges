// generator function that returns a generator object which yields the fibonacci sequence.

var fibGenerator = function*(n) {
    let a = 0, b = 1;
    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
  }
const gen = fibGenerator()

const result = [];
for (let i = 0; i < 5; i++) {
  result.push(gen.next().value);
}
console.log(result); 
