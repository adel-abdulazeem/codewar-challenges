//Re-open the class String and add the "myNewMethod" method.
// add a new method the String class, where that method should return Upper Case letters/string when applied to string

// call String class with prototype property then tieing that function name to its prototype object so it can be called on all instance created from the string class
// return upperCased string since it's applied on instance created from String class, so it should be called on this object 
String.prototype.myNewMethod = function () { return this.toUpperCase() }