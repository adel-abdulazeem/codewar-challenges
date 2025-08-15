//P: 2 arr of str arr1 constains el which may be substr of el in arr2
//R: sorted arr of str of arr1 which are substr of arr2
//E: console.log(function inArray(["tarp", "mice", "bull"],["lively", "alive", "harp", "sharp", "armstrong"]) => returns []
//P:
function inArray(array1,array2){
    //loop through arr1 to return el that are substr of arr2 then sort
    let arr1 = array1.sort()
    let arr2 = array2.join(',')
    return arr1.filter(el => arr2.includes(el)? el : '')
  }
  console.log(inArray(["live","strong","lyal","lysh","arp"], ["lively","alive","harp","sharp","armstrong"]))