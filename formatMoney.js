//The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.
//format money
//P: num either float or int
//R: $+num with trailing zero
//E: 
//P:
function formatMoney(amount){
    //used template literals 
    //adding $ sign at the leading end
    //using toFixed
     return `$${amount.toFixed(2)}`
   }

   formatMoney(3.1) // -> $3.10