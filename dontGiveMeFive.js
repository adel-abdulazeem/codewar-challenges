//In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

//don't give me five
//P: 2 arguments of num
//R: length of an array of num not including 5 in range bt 2 arg
//E:
//P:

function dontGiveMeFive(start, end){
//declare a var and assign empty arr to it
//loop through range bt 2 arg adding the num bt them to the array including the val start and end parameters
//map through the result array turning its el into str
//filter the maped array from the el that includes 5 
//returning the length property of the returned array
 let result = []
 for(let i = start; i <= end; i++){
    result.push(i);
 }
 return result.map(item => String(item)).filter((item,index,arr) => !item.includes('5')).length
}
console.log(dontGiveMeFive(4,17))