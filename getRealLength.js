function getRealLength (string) {
if(string.length == 0){
  return 0
} else {
  return 1 + getRealLength(string.slice(1))
}
}

console.log(getRealLength([1,3,5]))