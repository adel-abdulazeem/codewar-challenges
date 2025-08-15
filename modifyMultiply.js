//P: 3params 1st is a str, 2nd&3rd are intger 
//R: str
//E: 
//P:




function modifyMultiply (str,loc,num) {
    //split the str 
    //filter it 
    //then join 
    //map adding '-' to the filtered elelment
    //repeat it based on the num param
    //slice excluding the last char
    return str.split(' ').filter((el,x)=> x == loc).map(item => item + '-').join('').repeat(num).slice(-0,-1)
    }  