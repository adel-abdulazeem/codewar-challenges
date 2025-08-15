function solution(pairs){
    //P: obj 
    //R: str from the key val pairs of the object
    //E:
    //P:
    //use static method of Object.entries on the given object
    //will return an arr of arrs of key value pairs then joining evey sub arr
    return Object.entries(pairs).map(el => el.join(' = ')).join(',')
  }
  
  console.log(solution({a: 1, b: '2'}))