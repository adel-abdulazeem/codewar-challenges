//Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

//func that converts array of str num to nums
//P: array of num in the form of str
//R: array of numbers
//E: ["1", "2", "3"] to [1, 2, 3]
//P: 


function toNumberArray(stringarray){
    //map through the array el and wrap them returned item with Number()
    return stringarray.map(item => Number(item))
  }