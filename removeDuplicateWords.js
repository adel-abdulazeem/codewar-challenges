//Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

//removeDuplicateWords
//P: string of words whitespace seprated.
//R: string without duplicated words
//E: 
//P:


function removeDuplicateWords (s) {
    //split str by space
    //loop through each el of the arr using filter method
    //conditionals inedex == arr.indexOf(item)
    return s.split(' ').filter((item,index,arr) => index == arr.indexOf(item)).join(' ')
    }
    console.log(removeDuplicateWords('EsctYfnUtW wfIzwtYZT dG YkiF xQGrIS RoZsL EsctYfnUtW dG dG wfIzwtYZT x EsctYfnUtW xQGrIS dG wfIzwtYZT zifsG Qxo zifsG wfIzwtYZT YkiF RoZsL dG x RoZsL XIDZAFad EsctYfnUtW jjtlg Ye EsctYfnUtW Qxo Qxo MJgWZe x wfIzwtYZT YkiF wfIzwtYZT YkiF YkiF Qxo MJgWZe Ye Ye wfIzwtYZT YkiF Qxo MJgWZe wfIzwtYZT dG RoZsL n Ye x MJgWZe Ye wfIzwtYZT jjtlg dG zifsG dG Ye Qxo RoZsL YkiF YkiF n dG x Ye RoZsL EsctYfnUtW Ye EsctYfnUtW zifsG zifsG zifsG Qxo wfIzwtYZT Ye YkiF RoZsL x MJgWZe RoZsL dG EsctYfnUtW Qxo zifsG zifsG MJgWZ'))