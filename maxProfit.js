
// function takes prices arr of nums => num that represent max profit tht calc by subtracting the el of the arr from its index+1
// arr of nums, intg, always valid
// num || 0
// console.log(maxProfit([7,6,4,3,1])) // 0


var maxProfit = function(prices) {
    //declare max var to track the maxPrice
    // declare the min var to track the minPrice
    // loop to reassign the min and max 
    // within loop we declare the profit var which calculat the profit by subtract min from min 
    // then reassign max var using Math.max(max, profit)
    let max = 0
    let min = Infinity
    for(let i = 0; i < prices.length ; i++){
        min = Math.min(min, prices[i])//compare min var from last loop with curr
        let profit = prices[i] - min // cacl every loop 
        max = Math.max(max, profit)
    }
    return  max 
};

console.log(maxProfit([7,1,5,3,6,4]
))
console.log(maxProfit([2, 4, 1]))















