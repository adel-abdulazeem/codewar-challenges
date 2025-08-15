var lengthOfSequence = function (arr, n) {
    //conditional to determine how many times the n parameter is found within the given arr
    // TODO: Write some scripts here
    // arr and num which represent the start and end of returned subarr
    // num which represent the lenght of the returned subarr
    //
    return arr.slice(arr.indexOf(n), arr.lastIndexOf(n )+1)
  };
  
  console.log(lengthOfSequence([1,1], 1))