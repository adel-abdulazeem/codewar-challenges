class RomanNumerals {
    static romans = {
         "M": 1000,
         "CM": 900,
         "D": 500,
         "CD": 400,
         "C": 100,
         "XC": 90,
         "L": 50,
         "XL": 40,
         "X": 10,
         "IX": 9,
         "VX": 5,
         "IV": 4,
         "I": 1,
    }
       static  toRoman(num) {
         let res = ''
         for(let char in RomanNumerals.romans ){
           while(num >= RomanNumerals.romans[char]){
             num -= RomanNumerals.romans[char]
             res += char
           }
         }
         return res
       }

       static  fromRoman(str) {
         return [...str].reduce((acc, c, i, arr) => {
           let current = RomanNumerals.romans[arr[i]]
           let next = RomanNumerals.romans[arr[i + 1]]
           if(next > current){
             return acc - current
           }
           return acc + current
         }, 0)
 }

 }
console.log(RomanNumerals.toRoman(1000), 'M')