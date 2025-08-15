function deleteNth(arr,n){
    // func that takes arr of intg nums and returns a new arr of nums based on who many times they occurred <= n 
    // arr of num intg, n param num
    // new arr as a result fo filtering the input arr on how many el occurred comparing to n
    // console.log(deleteNth([20,37,20,21], 1))
  // declare a var of {}
  // loop filtering the given arr based on a conditional on the reassigned 
  
    let obj = {}
    return arr.filter(el => (obj[el] = obj[el]+1 || 1) <= n)
  }
  console.log(deleteNth([20,37,20,21], 1))
  console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3))

