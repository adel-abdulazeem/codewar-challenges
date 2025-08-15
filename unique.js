//arr of nums 
//return new arr without duplicate elements
// var arr = [1,1,1,2,2,3]; return [1,2,3]
//(9) [3, 1, 9, 4, 7, 6, 5, 2, 10]

function unique(arr) {
    //loop using filter method applying conditional that index of el === arr.lastIndexOf(el)
    return arr.filter((el,i) => arr.indexOf(el) === i)
    }
    console.log(unique([ 1, 3, 1, 9, 4, 7, 6, 5, 2, 10 ]))