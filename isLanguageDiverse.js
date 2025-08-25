// write a func takes arr of objs, 3 lang, python, Ruby, JS, return if the num of meetup participants of any of the 3 lang is at most 2 times higher than num of devs of any of the remaining langs  otherwise false
// arr of obj, always be valid
// return true if num of meetup participants represent any of the 3 lang at most 2 times higher than the num of the remainging langs

function isLanguageDiverse(list) {
    // create 3 var that holds the count of dev for each lang
    // then loop to assign their values
    // then conditional to detemine if the diff bt any theses counts is higher than 2 or not
    let python = 0;
    let ruby = 0;
    let js = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].language === 'Python') {
            python++
        } else if (list[i].language === 'Ruby') {
            ruby++
        } else if (list[i].language === 'JavaScript') {
            js++
        }
    }
    // conditional statements
    return Math.max(js, ruby, python) <= Math.min(js, ruby, python) * 2 ? true : false;

}

var list1 = [{ "firstName": "Daniel", "lastName": "J.", "country": "Aruba", "continent": "Americas", "age": 42, "language": "Python" }, { "firstName": "Kseniya", "lastName": "T.", "country": "Belarus", "continent": "Europe", "age": 22, "language": "Ruby" }, { "firstName": "Sou", "lastName": "B.", "country": "Japan", "continent": "Asia", "age": 43, "language": "Ruby" }, { "firstName": "Hanna", "lastName": "L.", "country": "Hungary", "continent": "Europe", "age": 95, "language": "JavaScript" }, { "firstName": "Jayden", "lastName": "P.", "country": "Jamaica", "continent": "Americas", "age": 18, "language": "JavaScript" }, { "firstName": "Joao", "lastName": "D.", "country": "Portugal", "continent": "Europe", "age": 25, "language": "JavaScript" }]

console.log(isLanguageDiverse(list1))