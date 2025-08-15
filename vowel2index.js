//P: str that constains vowels
//R: another str with replaced vowels by their position
//E: 
//P:
function vowel2index(str) {
    return str.replace(/[aeiou]/ig, (el,i) => i + 1)
}