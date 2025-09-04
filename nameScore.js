// write a func that takes str an input of letters then return an obj of 1 prop which is input and  value num which represent the score of the name
// str, consists of just letters & space maybe, no punc || symbols, no empty str, or null value.
// return an obj where the input is the property and value is a number represent calc score of that name based on the corresponding value of each group tha each letter belongs to 


function nameScore(name) {
    // Insert your brilliant code here
    // create a var alph which an obj that holds each group of letters with their corres values
    // create another obj that holds value of name input where all letters of name converted to uppercase
    // create a variable called score that holds the calc score of the name's letters
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXY';

    let score = name.toUpperCase().split('').filter(el => alpha.includes(el))
        .map(el => {
            return 'ABCDE'.includes(el) ? 1 :
                'FGHIJ'.includes(el) ? 2 :
                    'KLMNO'.includes(el) ? 3 :
                        'PQRST'.includes(el) ? 4 : 5
        }).reduce((acc, c) => acc + c, 0)
    return { [name]: score }
}

console.log(nameScore('Mary Jane'), { 'Mary Jane': 20 })