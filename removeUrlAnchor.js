//Complete the function/method so that it returns the url with anything after the anchor (#) removed.
function removeUrlAnchor(url){
    let arr = url.split('')
    if(arr.includes('#')){
      let result = []
      for(let i = 0; i < arr.indexOf('#'); i++){
        result.push(arr[i])
      }
      return result.join('')
    }else{
      return url
    }

  }