// function facRecursion(value){
//     if(value == 0){
//        return 1
//      } else if(value < 0){
//        return 0
//      } 
//      else if(value == 1){
//        return 1
//      }
//        return facRecursion(value - 1) * value
//    }

// //    const obj = {
// //     name: 'Alice',
// //     handleClick: function () {
// //       // try toggle bt anonymous func and arrow func
// //        return console.log(this.name); // Logs "Alice"
// //     }
// //   };
// //   obj.handleClick();

let arr = [1, 2, 3]
let obj = {name: "john", age: 34}
for(const char in obj){
  console.log(char)
}