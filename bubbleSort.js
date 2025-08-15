
//bubble sort is way of sorting arr of nums from the smallest to the largest where larger numbers bubble to the top one by one



const bubble = (arr) => {
    let res = []
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
          if(arr[j] > arr[j + 1]){
            // create a temp var to save teh value
            let temp = arr[j] // 2
            arr[j] = arr[j + 1] // 1
            arr[j + 1] = temp// 2
            res.push([...arr]) // [1,2,4,3]
          }
        }
      }
      return res
  }

  console.log(bubble([2,1,4,3]))