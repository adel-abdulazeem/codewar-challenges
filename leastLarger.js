//P: arr of nums&number 
//R: return the index || -1
//E: leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
//P:


function leastLarger(a,i) {
    //conditional 
    //return the index of the smallest No that's > a[i]
    return a.indexOf(Math.min(...a.filter(el => el > a[i])))
    }
    
    console.log(leastLarger([4, 1, 3, 5, 6], 0))