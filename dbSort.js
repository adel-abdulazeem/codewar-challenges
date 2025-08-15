


function dbSort(a){
    return a.filter(item => typeof item == 'number').sort((a,b) => a - b).concat(a.filter(item => typeof item == 'string').sort())
    }
  
  
    console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]))