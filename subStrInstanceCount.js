function solution(fullText, searchText){
    return fullText.split(searchText).length - 1
  }


  function maxRecurring(tex){
    let obj = {}
    let charMax = ''
    let maxRecur = 0
  for(let char of obj){
   if(obj[char]){
    obj[char]++
   } else {
   obj[char] = 1
  }
  for(let char in obj){
      if(obj[char] > maxVal){
        maxVal = obj[char]
        maxChar = char
    }}
  return maxChar
  }
}