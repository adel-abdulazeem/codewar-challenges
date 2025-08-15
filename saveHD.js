// determine how many files to save into disk 
// must be saved in the same order they appeared in

//P: arr of nums each num represent the file size & num tht represent hd capcity
//R: number tht represent how many files can be fit into the disk 
//E: save([12, 0, 0, 1], 12) -> 3
//P:
function save(sizes, hd) {
    //loop through sizes 
    //filtering it upon summing each el till their result evalutes to false if it <= hd
    let i = -1
    while(hd >= 0){
      hd -= sizes.shift()
      i++
    }
   return i
  }
  
  console.log(save([4, 4, 4, 3, 3], 12))