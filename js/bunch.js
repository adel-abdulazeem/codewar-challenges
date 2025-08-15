



//You get an array of numbers, return the sum of all of the positives ones.
function positiveSum(arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > 0){
        sum += arr[i]
      }
    }
    return sum
  }

  //Complete the solution so that it reverses the string passed into it.
  function solution(str){
    return str.split('').reverse().join('')
  }

  //Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
  function boolToWord( bool ){
    return bool === true? 'Yes' : 'No'
  }

  //We need a function that can transform a number (integer) into a string.
  function numberToString(num) {
    // Return a string of the number here!
    return num.toString()
  }

  //Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).
  function opposite(number) {
    return -number
  }

  //It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
  function removeChar(str){
    //You got this!
   return str.slice(1,-1)
   };
   
   //Complete the square sum function so that it squares each number passed into it and then sums the results together.
   const squareSum = numbers => numbers.reduce((acc,c)=> acc + (c*c), 0)

   //Find the smallest integer in the array
   class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }

  //Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
  function repeatStr (n, s) {
    return s.repeat(n)
  }
//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
  var summation = function (num) {
    let sum = num
    if(sum > 0){
       for(let i = 1; i < num; i++){
      sum += i
    }
    }
    return sum
  }

//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
function countSheeps(sheep) {
    // TODO
    let sum = 0;
    for(let i = 0; i < sheep.length; i++){
      if(sheep[i] == true){
           sum = sum + sheep[i]
      }
    }
    return sum
  }
  
//Write a function that removes the spaces from the string, then return the resultant string.
  function noSpace(x){
    return x.split(' ').join('')
    }

//Your task is to create a function that does four basic mathematical operations.The function should take three arguments - operation(string/char), value1(number), value2(number).The function should return result of numbers after applying the chosen operation.
function basicOp(operation, value1, value2){
    //Code
    if(operation == '+'){
      return value1 + value2
    }else if(operation == '-'){
          return value1 - value2
    }else if(operation == '*'){
          return value1 * value2
    }else{
          return value1 / value2
    }
  }

  //We need a function that can transform a string into a number. What ways of achieving this do you know?
  const stringToNumber = function(str){
    // put your code here
    return Number(str)
  }

  //We need a function that can transform a string into a number. What ways of achieving this do you know?
  function century(year) {
    // Finish this :)
    return Math.ceil(year/100)
  }
  function litres(time) {
    return Math.floor(time * 0.5)
  }

  //Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.The output should be two capital letters with a dot separating them.
  function abbrevName(name){
    return name.split(' ').map(item => item.charAt(0)).join('.').toUpperCase()
    }
 
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
    //code here
    return n.toString().split('').reverse().map(item=> parseInt(item))
  }

//Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
function greet(name){
    return `Hello, ${name} how are you doing today?`
  }

//Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
  function lovefunc(flower1, flower2){
    // moment of truth
    return (flower1 % 2 === 0 && flower2 % 2 !== 0? true : false) || (flower2 % 2 === 0 && flower1 % 2 !== 0? true : false)
  }

//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
  function paperwork(n, m) {
    return n > 0 && m > 0 ? n * m : 0
  }

//Implement a function which convert the given boolean value into its string representation.
  function booleanToString(b){
    //your code here
    if(b == true){
      return b = "true"
    }
    else{
      return 'false'
    }
  }

//Create a function which answers the question "Are you playing banjo?".If your name starts with the letter "R" or lower case "r", you are playing banjo!
  function areYouPlayingBanjo(name) {
    return name.charAt(0) == 'R' || name.charAt(0) == 'r'? `${name} plays banjo` :
    `${name} does not play banjo`
  }
  
// Return the number (count) of vowels in the given string.We will consider a, e, i, o, u as vowels for this Kata (but not y).The input string will only consist of lower case letters and/or spaces
  function getCount(str) {
    return str.split('').filter(item => 'aeiouAEIOU'.includes(item)).length
  }

//Trolls are attacking your comment section!A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.Your task is to write a function that takes a string and return a new string with all vowels removed.For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
  function disemvowel(str) {
    return str.split('').filter(item => !'aeiouAEIOU'.includes(item)).join('');
  }

//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
  function squareDigits(num){
    return Number(num.toString().split('').map(item => Math.pow(Number(item), 2)).join(''))
  }


//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
  function highAndLow(numbers){
    let arr = numbers.split(' ').map(item => Number(item))
    return `${Math.max(...arr)} ${Math.min(...arr)}`
  }

//Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
function isDivisible(n, x, y) {
  return (n % x == 0 )&& (n % y ==0)? true : false
}

//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
function descendingOrder(n){
  let num = n.toString().split('').sort((a,b)=> b - a).join('')
return Number(num)
  }

//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
  function getMiddle(s){
    let n =  s.length 
      return n % 2 === 0? s.charAt(n/2 - 1) + s.charAt(n/2) : s.charAt(n/2)
    }

//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filter_list(l) {
  return l.filter(item => typeof item === 'number')
  }

//This time no story, no theory. The examples below show you how to write function accum:
  function accum(s) {
    return s.split('').map((item,ind)=> item.toUpperCase() + item.toLowerCase().repeat(ind)).join('-')
  }

//Given an integral number, determine if it's a square number:
  var isSquare = function(n){
    return Math.sqrt(n) % 1 === 0
    }

//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
    function isIsogram(str){
      return str.toLowerCase().split('').filter((item,index,arr) =>index == arr.indexOf(item)).join('') === str.toLowerCase() ? true : false
      }

//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
      function XO(str) {
        return str.toLowerCase().split('').filter(item => item == 'o').length === str.toLowerCase().split('').filter(item => item == 'x').length
          ? true : false
        }

//Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
 function toJadenCase(str) {
   return str.split(' ').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' ')
 };

//Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
 function spinWords(string){
  return string.split(' ').map(item => item.length >= 5? item.split('').reverse().join('') : item ).join(' ')
}


function findOdd(arr) {

  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}

//Simple, given a string of words, return the length of the shortest word(s).
function findShort(s){
  return  Math.min(...s.split(' ').map(item => item.length))
}


//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
function dnaStrand(dna){
  return dna.split('').map(item => item == 'A'? 'T' : item == 'T'? 'A' : item == 'C'? 'G' : 'C').join('')
}

//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.cd
function sumTwoSmallestNumbers(numbers) {  
  let firstLowest = Math.min(...numbers)
  let arr = numbers.filter(item => item !== firstLowest)
  let secLowest = Math.min(...arr)
  return secLowest + firstLowest
}


//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
function getSum(a,b){
  return (Math.abs(a - b) + 1) * (a+b)/2
}

//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
function longest(s1, s2) {
  let arrs1 = s1.split('').filter((item,index)=> index === s1.indexOf(item))
  let arrs2 = s2.split('').filter((item,index)=> index === s2.indexOf(item))
  return arrs2.filter(item => !arrs1.includes(item)).concat(arrs1).sort().join('')
}

//Make a program that filters a list of strings and returns a list with only your friends name in it.If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
function friend(friends){
  return friends.filter(item => item.length == 4)
 }

//To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
 function openOrSenior(data){
  return [...data].map(item => item[1] > 7 && item[0] >= 55 ? 'Senior' : 'Open')
}

//Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  return Number.isInteger(Math.sqrt(sq))? Math.pow((Math.sqrt(sq) + 1),2) : -1
}


//You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
function printerError(s) {
  // your code
let rangeLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']
let sLength = s.length
let numcharOutRange = s.split('').filter(item => !rangeLetters.includes(item)).length 
return `${numcharOutRange}/${sLength}`
}