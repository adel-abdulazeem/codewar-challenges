/*
Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points
{
kata: 5,
Petes_kata: 10,
life: 0,
eating: 1
}

misery score
 */
// arr of str el, from a set of option('kata', 'petes kata', 'life' & 'eating'), could be repeated, each str el maps to a specific num value always valid. 
// return a str based on a set certain conditions according to summing values of arr el
// paul((['life', 'eating', 'life'])  -> 'Super happy!'
// 
function paul(x) {
    // create a var of obj holds the each str el with their corresponding values as stated
    //create score var that holds the result of  looping through the input arr, replacing each str el with their corres values and summing the each maped value for each el using reduce method, starting from 0 as an initial val
    // define certain conditionals based on 4 cases defined in the problem which if the total score < 40 -> 'Super happy!' || < 70 >= 40 = 'Happy!' || < 100 >= 70 = 'Sad!' or > 100 = 'Miserable!'
    const vals = {
        'kata': 5,
        'Petes kata': 10,
        'life': 0,
        'eating': 1
    };
    const score = x.reduce((acc, c) => vals[c] + acc, 0)
    if (score < 40) {
        return 'Super happy!'
    } else if (score >= 40 && score < 70) {
        return 'Happy!'
    } else if (score >= 70 && score < 100) {
        return 'Sad!'
    } else if (score > 100) {
        return 'Miserable'
    }
}
// console.log(paul(['life', 'eating', 'life', 'Petes kata']))
console.log(paul(['life', 'eating', 'life']), 'Super happy!');
console.log(paul(['life', 'Petes kata', 'Petes kata', 'Petes kata', 'eating']), 'Super happy!');
console.log(paul(['Petes kata', 'Petes kata', 'eating', 'Petes kata', 'Petes kata', 'eating']), 'Happy!');