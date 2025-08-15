function anagramDifference(w1,w2){
    // 2 str of letter, lowercase
   // num tht represent tht letters should be removed from the 2 given str to make anagram
   //
   // declare 2 var, split, filter each param upon each word contains the same el
   // subtract the length of resulted arr from the length of given param the sum the result for both
   var wordOne = [...w1].reduce((w2,x)=>w2.replace(x,""),w2).length;
   var wordTwo = [...w2].reduce((w1,x)=>w1.replace(x,""),w1).length;
   return (wordOne+wordTwo);
  }
  
  console.log(anagramDifference('a','aab'))
  console.log(anagramDifference('codewars','hackerrank'))
  console.log(anagramDifference('xclleuqieusuiosmxtuqukyhhbmil','xlrsrbqiauymmfvuarvpuejsbljhunafkjhzpdnmanywcsrdfvidlyjsbwvfflmzpultowuiuwukgyqaqqbzhh'))