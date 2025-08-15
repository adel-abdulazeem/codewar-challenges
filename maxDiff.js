
//You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

//retun the largest difference
//P: arr of intger -v/+ve/empty arr
//R: return num or 0 if length of arr = 1 or 0
//E:
//P:

function maxDiff(list) {
  //conditionals 
  //return math.max - math.min or zero
    return  list !== undefined && list.length !== 0? Math.max(...list) - Math.min(...list) : 0
 
};

console.log(maxDiff([0]))