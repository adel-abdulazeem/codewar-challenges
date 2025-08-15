//P: num in the str format
//R: boolean upon a certain condition( if the passed num is divible by 3)
//E:
//P:
function divisibleByThree(str){
    //split the str of num into individual nums 
    //map through each item converting each num str into num type
    //reduce the the nums of the new arr by summing their elemeents
    //then check if the reduce num % 3 == 0 or not returning true or fale
  return str.split('').map(item => Number(item)).reduce((acc,c) => acc + c,0)%3 == 0 ? true : false
  }