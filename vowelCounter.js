// func takes str of letters, upper/lower case contains vowel or not => num which indicates the num of vowels within the passed str

function vowelCounter(str){
    let res = str.match(/[aeiou]/gi)
    if(res){
        return res.length
    } else {
        0
    }
}

