//P: 4 params
//R: num that represent the num of years
//E: 
//P: 

function calculateYears(principal, interest, tax, desired) {
    //decalare a years var and assign it to zero
    //while loop with conditional 
    //keep reassigning the principal with years counting 
    //till the condition evaluates to false
    //then return years
    let years = 0;
    while(principal < desired){
    principal += (principal * interest) * (1 - tax);
       years++
    }
    return years
        
    }
    console.log(calculateYears(1000, 0.05, 0.18, 1100))
