// intg
// str where odd num is surrounded by "-" but not on the end or beginning
// 6815 -> '68-1-5'
//

function dashatize(num) {
    //declare a var that holds a value of str of the given the num
    //loop conditional 
    let str = `${num}`.split('').map(el => el % 2? '-' + el + '-': el)
  
  return str.join('').split('-').filter(el => el !== '').join('-')
  }
  
  console.log(dashatize(5311))
  console.log(dashatize(274))
  console.log(dashatize(86320))
  