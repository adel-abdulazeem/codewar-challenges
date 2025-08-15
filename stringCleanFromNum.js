//Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
//Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.



//remove number from a string
//P: string might contains num, char, spacing
//R: string without a num
//E: 
//P:

function stringClean(s){
  //split string
  //loop through the resulted arr and filter it out from num
  //join the filtered elements into one str
  return s.split('').filter((item,index,arr) => !Number(item) && item !== '0').join('')

}

stringClean('so0lved') // output -> 'This looks great!'