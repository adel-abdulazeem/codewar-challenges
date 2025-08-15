//P: 2 arrs of nums each of which consists of 3 el the 1st arr represent Alice, 2nd respresent Bob
//R: str based on condition
//E: solve([47, 7, 2], [47, 7, 2]),'0, 0: that looks like a "draw"! Rock on!'
//
function solve(a, b) {
    //declare 2 var of 0
    //loop 
    //conditional to reassign that var 
    let bobScore = 0
    let aliceScore = 0
    for(let i = 0; i < a.length; i++){
        a[i] > b[i] ? aliceScore +=1 : a[i]  < b[i] ? bobScore +=1 : 0
    }
   return aliceScore == bobScore ?`${aliceScore}, ${bobScore}: that looks like a "draw"! Rock on!` : aliceScore > bobScore ? `${aliceScore}, ${bobScore}: Alice made "Kurt" proud!` : `${aliceScore}, ${bobScore}: Bob made "Jeff" proud!`
    }
  console.log(solve([47, 67, 22], [26, 47, 12]))