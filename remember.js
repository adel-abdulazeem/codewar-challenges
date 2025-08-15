// func takes str => arr of repeated char(letters, nums, whitespace)and show it once, by the order of their first repetition.
//str of letters, nums, whitespace which is might be repeated
// arr of repeated els in the same order each el for once
// remember("pippi") => returns ["p","i"]   // show "p" only once
function remember(str) {
    // split str filter to just return the repeated el
    // then filter again to return the repeated el once
    return str.split('').filter((el,i) => i !== str.indexOf(el) )
    .filter((el,i,a) => i === a.indexOf(el) )
  }
  
  console.log(remember('Pippii'))