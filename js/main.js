//abcdefghijklmnopqrstuvwxyz0123456789
function Person (name) {
return {
  name: name,
  greet: function() {
    return `Hello, my name is ${name}`;
  }
}
}

const person1 =  Person("Alice");

console.log(person1.greet()); // Output: Hello, my name is Alice