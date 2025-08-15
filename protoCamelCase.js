String.prototype.camelCase=function(){
  //your code here
  return this.split(' ').map((el,i) => el.split('').map((el,i) => i == 0? el.toUpperCase(): el).join('')).join('')
}