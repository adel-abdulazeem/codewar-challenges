// func takes str of letters contains 'IVXLCDM' should return intger 
// str of 'IVXLCDM' roman nums, always valid 
// num, intger
// 
var romanToInt = function(s) {
    // declare a var romans assigned to an obj where each key represent roman letter  is mapped to its intger nums
    // split the given str then map return its opposite val in obj 
    // then reduce to return the accumulation 
    let roman = {
        'I': 1, 
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    return [...s].reduce((sum, curr, i, arr) => {
        const current = roman[curr]
        const next = roman[arr[i + 1]]
        if(current < next){
          return  sum - current
        }
        return sum + current
    }, 0)
};

console.log(romanToInt('III'), 3)// output 58
console.log(romanToInt('MCMXCIV'), 58)// output 58