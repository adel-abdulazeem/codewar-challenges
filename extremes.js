//P: arr of nums 
//R: the difference bt the max and min
//E:
//P:
function betweenExtremes(numbers) {
    //sort
    //subract the 1st from the last el
    numbers.sort((a,b) => a - b)
   return numbers[numbers.length - 1] - numbers[0]
 }