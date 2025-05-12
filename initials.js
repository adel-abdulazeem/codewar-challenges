// write a funct tht takes a full name=> the initials separated by dots he initials must be uppercase. The last name of the person must appear in full, with its first letter in uppercase as well.

// str of words separated by space, without leading or trailing space, names always lowercase
// return new str where all names except the last one reduced to their 1st letter separated by dot and the 1st letter of the last name began with Uppercase
// 
function initials(n){
    let arr =  n.split(' ')
    let res = ''
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[arr.length - 1]){
           res += arr[i][0].toUpperCase() + '.'
        } else{
            res += arr[i][0].toUpperCase() + arr[i].slice(1)
        }
    }
    return res
}

console.log(initials("code wars"), "C.Wars")
console.log(initials("Barack hussein obama"),"B.H.Obama")