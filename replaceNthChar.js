// func tht replaces every nth char where newVal replaces old valu
//

function replaceNth(text, n, oldValue, newValue) {
// func accepts 4 params; str, num, letter, letter, always valid
// return new str where each char of each nth word the nth char is replaced by new val
if(n <= 0) return text

let count = 0
let res = ''
for(let i = 0; i < text.length; i++){
    if(text[i] === oldValue){
        count++
        if(count % n === 0){
            res += newValue
        }else{
            res += text[i]
        }
    }
    else{
        res += text[i]
    }
}
if (count < n) return text;

return res
}

  console.log(replaceNth("Vader said: No, I am your father!", 2, 'a', 'o'), "Vader soid: No, I am your fother!")