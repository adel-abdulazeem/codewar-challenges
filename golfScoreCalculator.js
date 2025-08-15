//P: 2 str both will be of length 18 and each char will be a num bt 1 & 9
//R: num which reperesent the score of the difference of par and strok
//E: ('443454444344544443', '353445334534445344'), -1
//

function golfScoreCalculator(parList, scoreList){
    //declare 2 var each of them will hold the splited then mapped to return a num then reduced by summation for each arg
    //return the differecne of the score and par var 
    //that will be calculated score 
    let par = parList.split('').map(el => Number(el)).reduce((acc,c) => acc + c, 0)
    let score = scoreList.split('').map(el => Number(el)).reduce((acc,c) => acc + c, 0)
    return score - par
  }
  
  console.log(golfScoreCalculator('443454444344544443', '353445334534445344'))