//write a func tht returns a str without a str
// takes no params
// return str
// no use of quotes or template string
const helloWorld = () => {
  let charCode = [
   72, 101, 108, 108, 111,
   44,  32,  87, 111, 114,
  108, 100,  33
]
  return String.fromCharCode(...charCode)
};

console.log(helloWorld())