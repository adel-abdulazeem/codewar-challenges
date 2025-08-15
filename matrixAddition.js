// 2 arr each of them consists subArrs of nums 
// return new arr where each el within counter subArr are summed
// 
//
function matrixAddition(a, b){
    //mapp through a then map through each el within a then sum each num with b[i][j]
  return a.map((el,i) => el.map((a,j) => a + b[i][j]))
  }
  
  console.log(matrixAddition(  [ [1, 2, 3],
    [3, 2, 1],
    [1, 1, 1] ],  [ [2, 2, 1],
    [3, 2, 3],
    [1, 1, 3] ] ))