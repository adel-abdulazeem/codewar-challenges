var intToRoman = function(num) {
    let roman = {
'M':  1000, 'CM': 900, 'D':  500, 'CD': 400,
'C':  100,  'XC': 90,  'L':  50,  'XL': 40,
'X':  10,   'IX': 9,   'V':  5,   'IV': 4, 'I':  1
}
    //declare a res var of empty str
    let res = ''

    // for in loop to loop through roman obj

    for( let char in roman){
        // nested while loop runs the num >= roman[char] conditional num of times === roman.length
        while(num >= roman[char]){
            res += char
            num -= roman[char]
        }
    }
    return res
};

console.log(intToRoman(1994))