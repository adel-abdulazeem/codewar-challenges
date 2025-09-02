// write a func takes arr of obj return arr of obj that only include firstName property of odd value according to ASCII
// arr of objs, awlays gonna be valid
// return new arr of objs where their 1st name property compiled to odd num in ascii
//

function findOddNames(list) {
    // loop through using filter, splitting the val of firstName prop,
    // then apply charCodeOf(letter) then reduce summing the values the modul by 2 to determine if it's odd num 
    return list.filter(el => {
        return el.firstName.split('').map(el => el.charCodeAt())
            .reduce((acc, c) => acc + Number(c), 0) % 2 !== 0
    })

}

var list1 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

console.log(findOddNames(list1))