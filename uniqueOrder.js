
      // arr of num or str letters 
      // return new list, unique el, preserving the original order
      // uniqueInOrder([1,2,2,3,3]) == [1,2,3]
      // var uniqueInOrder=function(iterable){
      //   // conditional to determine arr || str then split
      //   // filter
      //   return typeof iterable === 'string'? iterable.split('').filter((el,i) => el !== iterable[i+1]) : iterable.filter((el,i) =>  el !== iterable[i+1])
      // }

      // console.log(uniqueInOrder('ABBCcAD') ) // ['A', 'B', 'C', 'c', 'A', 'D']
      // console.log(uniqueInOrder([1,2,2,3,3]) )// [1,2,3]
      // console.log(uniqueInOrder('AAAABBBCCDAABBB')) // ['A', 'B', 'C', 'D', 'A', 'B']

      // function bubbleSort(arr){
      //   for(let i = 0; i < arr.length; i++){
      //     for(let j = 0; j < arr.length; j++){
      //       if(arr[j] > arr[j + 1]){
      //         let temp = arr[j]
      //         arr[j] = arr[j + 1]
      //         arr[j + 1] = temp
      //       }
      //     }
      //   }
      //   return arr
      // }

      // console.log(bubbleSort([2,1,5,4,3]))


      let cache = {}
var fib = function(n) {
  if(n < 2){
    return n
  } else if (cache[n]){
    return cache[n]
  } else{
    let result = fib(n-1) + fib(n-2)
    cache[n] = result
    return result
  }
};
console.log(fib(9));


// (function foo (){ console.log(5*2) }) ();
// (function foo (){ console.log(10*2) }());
// (function (){ console.log(5*2) }) ();
// (function (){ console.log(10*2) }());