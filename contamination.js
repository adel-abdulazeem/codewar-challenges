//An AI has infected a text with a character!!This text is now fully mutated to this character.If the text or the character are empty, return an empty string.There will never be a case when both are empty as nothing is going on!!Note: The character is a string of length 1 or an empty string.

//P: takes 2 param the 1st is str or empty str 2nd is char
//R: replace str by char
//E: 
//P:

function contamination(text, char){
    //split text str
    //map through the new arra 
    //applying condition to handle case of empty str
    //return each item of the arr by char
    //join the items of the resulted arr
    return text.split('').map((item,_,arr) => arr !== ''? char : '' ).join('')
   }