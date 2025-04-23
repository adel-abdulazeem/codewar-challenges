// write a func that takes fn as arg and it return a num

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  };

} 
var person = Person()
console.log(person("John", 30))