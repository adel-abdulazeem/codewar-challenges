// arr of arrs of nums & another arr which is query
// return a num which is the index of the query arr within the input arr of arrs
// var arrayToSearch = [[1,2],[3,4],[5,6]]; var query = [1,2]; // => 0
//

var searchArray = function (arrayToSearch, query) {
    //conditional to validate that each sub-arr within arrToSearch is arr && length is 2 && the query length is an arr && length is 2
    //loop to return the inedex of query arr within arrTosearch
    //otherwise throw an error
     if(arrayToSearch.every(el => Array.isArray(el) && 
           el.length ==2 ) && Array.isArray(query) && query.length == 2){
            return arrayToSearch.findIndex((el,i) => el.every((el,x) => el == query[x])
          )
           } else {
            throw new Error
    }
  }
    console.log(searchArray([[1,2],[3,4],[5,6],[7,8]], [1,2]))