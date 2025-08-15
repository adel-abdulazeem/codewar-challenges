//Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"

//P: str 
//R: arr of 2 el / arr of 1 el
//E:
whoIsPaying('Mexico') // output ["Mexico", "Me"]
whoIsPaying('Me') //output ["Me"]

//P:

function whoIsPaying(name){
    //declare a var and assign name.split() as it val
    //conditional if name.length is > 2 or not
    // return either arr of name and its truncated version or just the arr of name if its length is < 2 
    let arr = name.split()
    return name.length > 2 ? arr.concat(name.slice(0,2)) : arr
}
