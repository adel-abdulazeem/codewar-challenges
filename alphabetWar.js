function alphabetWar(fight){
    //declare to variables left and right 
    let left = {'w': 4, 'p': 3, 'b': 2, 's': 1}
    let right = {'m': 4, 'q': 3, 'd': 2, 'z': 1}
    let ltSide = fight.split('').map(el => left[el]).filter(el => el).reduce((acc,c) => acc + c, 0)
    let rtSide = fight.split('').map(el => right[el]).filter(el => el).reduce((acc,c) => acc + c, 0)

    return ltSide > rtSide? "Left side wins!" :
     rtSide > ltSide ? "Right side wins!" : "Let's fight again!"
  }

  console.log( alphabetWar("z") , "Right side wins!")
  console.log(  alphabetWar("wwwwww"))