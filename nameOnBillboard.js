//If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).

//name on billboard cost of the name upon each letter
//P: name= str, price = 30
//R: cost as num
//E: 
//P: 
function billboard(name, price = 30){
//split name to its set of char
//map through each item and return the price getting an array of all letters prices
//reduce the new resulted arr by collecting its el
    return name.split('').map(item => price).reduce((acc,c) => acc + c , 0)
   } 

billboard("Jeong-Ho Aristotelis")
console.log(billboard("Abishai Charalampos"))