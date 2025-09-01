// Write a function that returns the array sorted alphabetically by the programming language. In case there are some developers that code in the same language, sort them alphabetically by the first name:
// arr of objects, always valid, no developers share the same lang and name
// return new arr sorted alph by programming lang or 1st name if developers write the same lang
// 

function sortByLanguage(list) {
    // loop 
    // conditional to determine if developers write the same lang or not
    // sort according to the programming lang if they not share 
    // of if they write the lang we gott sort basedon the 1st name
    return list.sort((a, b) => a.language === b.language ? a.firstName.localeCompare(b.firstName) : a.language.localeCompare(b.language));

}

let list1 = [
    { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
    { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
    { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
    { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' }
];

console.log(sortByLanguage(list1))