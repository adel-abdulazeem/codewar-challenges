// arr of intgers in rang -1000..1000, vary in size, not mutates the input arr
// new arr where the middle el is the greatest then the next greates on both sides and so on
// [2, 1]  -->  [1, 2, 1]
//[-16, -8, 0, 18, 42, 18, 0, -8, -16]
function mirror(data) {
    //sort the input arr ascendingly
    //sort the input arr descendingly then remove the 1st el
    //concat the results of the above operations
    //use rest parameter or destructuring to sort the input arr without mutating it
      let ascArr = [...data].sort((a,b) => a - b)
      // let descArr = data.sort((a,b) => b - a)
      return ascArr.slice(0,-1).concat([...data].toSorted((a,b) => b - a))
    }
    console.log(mirror([2, 3, 1]))