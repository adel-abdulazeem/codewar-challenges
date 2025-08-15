// 2 params arr & el
// return based on boolean num || "Not found"
// (find(array, 5), 2)
// using function expression to write that function that do the job in the shortest way

const find = (array, element) => array.includes(element)? array.indexOf(element) : "Not found"
