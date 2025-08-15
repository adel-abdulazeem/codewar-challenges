const bubble = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j] // temporary val
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
  }
 console.log(bubble([2,1,4,3]))

 //bubble sorting: a way of sorting an arr of nums from the smallest to the largest where larger nums bubbles to the top one by one. where we compare each 2 adjacent nums and swap the first is it is larger than the theo