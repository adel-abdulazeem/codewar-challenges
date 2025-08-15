function numObj(s){
return s.map(item => {
  return {[item]: String.fromCharCode(item)}
})
}
//P: arr of nums
//R: arr of objects of num prop in form of str and letter corresponds to the numv
//E: 
//P:
function numObj(s){
  //loop using  map 
  //return form which will be as an el of the  the returned array

return s.map(item => {
  return {[item]: String.fromCharCode(item)}
})
}

console.log(numObj([118,117,120]))