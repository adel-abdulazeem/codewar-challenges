//P: str of nums
//R: str of another nums after removing 9 bt two 7 if found
//E: 
//P



    //declare a var and assign to it a val of splitted arr
    //loop through arr
    //apply condition
    //return the joined arr
    function sevenAte9(str) {
        let arr = str.split('')
        for(let i = arr.length - 2; i >= 1; i --){
          if(arr[i-1] === '7' && arr[i] == '9' && arr[i+1] == '7')
             arr.splice(i,1)
        }
          return arr.join('')
        }
        console.log(sevenAte9('797'))