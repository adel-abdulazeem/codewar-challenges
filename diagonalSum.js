//P: arr of arrs of num values
//R: sum of the 1st val of the 1st arr and 2nc val of sec arr ..etc
//E:array = [[5, 9, 1, 0],[8, 7, 2, 3],[1, 4, 1, 9],[2, 3, 8, 2]]diagonal sum: 5 + 7 + 1 + 2 = 15
//P


function diagonalSum(matrix){
    //loop return the val withing each arr with indexof == index of parent arr
    //reduce to sum 
    return matrix.map((el,i,a) => el.filter((item,index,arr) => index == i)).reduce((acc,c) => Number(acc) + Number(c), 0)
  
  }
  console.log(diagonalSum([[19,14,15,0,10,15],[17,13,16,10,9,6],[22,5,8,11,6,10],[12,9,13,9,2,6],[5,9,18,8,13,11],[15,19,15,0,11,16]]))