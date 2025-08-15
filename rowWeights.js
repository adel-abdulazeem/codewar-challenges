//Several people are standing in a row divided into two teams.The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

//P: array of nums could be empty
//R: array of 2 nums
//E: 
console.log(rowWeights([[50, 60, 70, 80]]))

function rowWeights(array){
//P: declare 2 var each one will yeild to an arr form the given arr 
//by filter method using modulus according indx is odd or even
//then reducing the el of each arr for each var by summaion 
//return the val of 2 var in the form of an array
    let team1 = array.filter((item,indx) => indx % 2 == 0).reduce((acc,c) => acc + c,0)
    let team2 = array.filter((item,indx) => indx % 2 != 0).reduce((acc,c) => acc + c,0)
    return [team1,team2]
    }
