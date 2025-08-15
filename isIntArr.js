    //arr of num which can be intg or floats
    // true or flase
    //
    function isIntArray(arr) {
        if(!Array.isArray(arr)) return false
        for(let i = 0; i < arr.length; i++){
          if(!Number.isInteger(arr[i])) return false
        }
        return true
        }
         
            console.log(isIntArray([]))