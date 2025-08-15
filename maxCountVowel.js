function solve(s){
    let vowels = 'aeiou'
    let current = 0
    let max = 0
    for(let i = 0; i < s.length; i++){
        if(vowels.includes(s[i])){
            current++
            if(current > max){
                max = current
            }
        } else{
            current = 0
        }
    }
     
return  max
  }

  console.log(solve('codewarriors'))