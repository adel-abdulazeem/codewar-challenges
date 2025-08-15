function sortTheInnerContent(words){
    // function, str words => new str where inner content of each word sorted descendingly
    // str words, lowercas, never be null || empty, 
    // new str where every word inner content is sorted descending
    // sortTheInnerContent("wait for me") // output "tihs ktaa is esay"
    //
    return words.split(' ').map(el => el.length > 2 ? el[0] + el.split('').slice(1,-1).sort().reverse().join('') + el[el.length -1] : el).join(' ')
  }
  
  console.log(sortTheInnerContent("wait for me")) // output "wiat for me"
  console.log(sortTheInnerContent(("sort the inner content in descending order")),"srot the inner ctonnet in dsnnieedcg oredr")