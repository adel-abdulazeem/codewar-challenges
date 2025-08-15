//P: arr of array
//R: sum or 0
//E: 
//P: adding a method sum to the prototype property of all Array object
Array.prototype.sum = function() {
    return this.reduce((a, b) => a + b, 0);
  };