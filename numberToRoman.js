function solution(number){
    let romans = {
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
      "v": 5,
      "IV":4,
      "I": 1, 
    }
    let res = ''
    for(let char in romans){
    while(number >= romans[char]){
      number -= romans[char]
      res += char
      }
    }
    return res
}

console.log(solution(44999))