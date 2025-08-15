//P: 2 params str and arr of str
//R: arr of "Empty" str if the given str isn't in any of the given arr || arr of str that contains the given str
//E: "ab", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"]
//P: 

function wordSearch(query, seq){
    //loop through seq arr checking if it contains el that include the given query or if it doesn't then return arr of str "Empty"
    //declare a var of result that holds the arr of the el that evaluates to true upon the stated condition
    //return the arr of result if its length is > than 0 otherwise ["Empty"]
    query = query.toLowerCase()
    const arr = seq.filter(e => e.toLowerCase().includes(query))
    return arr.length ? arr : ['Empty']
  }
  
  console.log(wordSearch("Ab", ["za", "aB", "abc", "zab", "zbc"]))