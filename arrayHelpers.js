// TODO
Array.prototype.square = function(){
    return this.map( el => el * el)
  }
  Array.prototype.cube = function(){
    return this.map(el => el * el * el)
  }
  
  Array.prototype.average = function(){
    return this.length > 0 ? this.reduce((acc,c) => acc + c)/this.length : NaN
  }
  Array.prototype.sum = function(){
    return this.reduce((acc,c) => acc + c, 0)
  }
  Array.prototype.even = function(){
  return this.filter(el => el % 2 === 0)
  }
  Array.prototype.odd = function(){
    return this.filter(el => el % 2 !== 0 )
  }