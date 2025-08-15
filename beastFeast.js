//All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
function feast(beast, dish) {
    let dishArr = dish.split('')
     let beastArr = beast.split('')
     return dishArr[0] == beastArr[0] && dishArr[dishArr.length - 1] == beastArr[beastArr.length -1] ? true : false
   }