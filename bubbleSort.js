
//bubble sort is way of sorting arr of nums from the smallest to the largest where larger numbers bubble to the top one by one



function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]; // to hold the val of gre
        arr[j] = arr[j + 1]
        arr[j + 1] = temp;
      }
    }
  }
  return arr
}

console.log(bubble([2, 1, 4, 3]))