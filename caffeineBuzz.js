// func takes a non-zero integer as its arg based on condtional it should return a specfic str

// param is integer, non-zero, always valid
// return str based on certain conditions if the arg is divisable by specific nums, if non it should return "mocha_missing!"
/*
1   -->  "mocha_missing!"
3   -->  "Java"
6   -->  "JavaScript"
12  -->  "CoffeeScript"

 */
function caffeineBuzz(n){   
if(n % 12 === 0){
        return "CoffeScript"
    } 
    else if(n % 6 === 0){
        return "JavaScript"
    }else if(n % 3 === 0){
        return "Java"
    } else {
       return  "mocha_missing!"
    }
}
console.log(caffeineBuzz(1),  "mocha_missing!")
console.log(caffeineBuzz(3), "Java")
console.log(caffeineBuzz(6), "JavaScript")
console.log(caffeineBuzz(12),"CoffeeScript" )