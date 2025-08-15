//P: 2 params 1st is a num represent budget, 2nd is arr of coffe prices
//R: Str of prices for coffees you can afford
//E: search(3, [6, 1, 2, 9, 2]) --> "1,2,2"
//P:

function search(budget, prices) {
    //loop through prices arr filtering it returning  str of sorted nums< budget by joining its result
    return prices.filter(el => el < budget).join(',')
    }
    console.log(search(3, [6, 1, 2, 9, 2]))