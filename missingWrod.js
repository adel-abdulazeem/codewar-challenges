function missingWord(nums, str) {
    //P: arr of nums not sorted & str of words 
    //R: str of letters that their indices matches with the nums within the given arr
    //E: [5, 0, 3], "I love you"), "ivy"
    //P:
    //split the given str by ' ' then join it by ''
    //split it again by '' then loop returning el at the index with value of nums arr sorted
    let letters = str.split(' ').join('').toLowerCase()
    return Math.max(...nums) < str.length?  nums.sort((a,b) => a -b).map(el => letters[el]).join('') : "No mission today"
    
  }
  
  console.log(missingWord([12, 4, 6], "Good Morning"))