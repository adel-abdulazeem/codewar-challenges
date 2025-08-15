//P: num 
//R: number of occurences  of this num
//E: 
//P:
// declare a func tht takes element as  a param
//within funct declare counter var
//loop through the assumed arr 
//conditional 
//reassigne the counter var upon the result of the conditinal
//return the counter
Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
    value : function numberOfOccurrences(element) {
        let counter = 0
    for(let i = 0; i < this.length; i++){
      if(this[i] === element){
        counter++ 
      }
    }
    return counter
    }
  });