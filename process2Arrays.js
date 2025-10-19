// write a func that accepts 2 arrs, each of them with el that occur only once, we need to know: num of el present in both arrs, num of el present only in one arr, num of remaining el in arr1 after extracting the el of arr2, num of remaining el in arr2 after extracting the el of el arr1
// func takes 2 arr args, always valid
// return arr of 4 el, where 1st el represent num elements that are present in both arrays, 2nd represent num of el that are present in only one array, 3rd Number of remaining elements in arr1 after extracting the elements of arr2 and 4th el that represent num of remaining elements in arr2 after extracting the elements of arr1
function process2Arrays(arr1, arr2) {
    //declare 4 var 
    // use filter method to return the only nums that corresponds with logic stated
    // return an arr of 4 el representing the 4 vars
    const el1 = arr1.length > arr2.length ? arr1.filter(el => arr2.includes(el)).length : arr2.filter(el => arr1.includes(el)).length;

    const el2 = arr1.filter(el => !arr2.includes(el)).length + arr2.filter(el => !arr1.includes(el)).length;

    const el3 = arr1.filter(el => !arr2.includes(el)).length

    const el4 = arr2.filter(el => !arr1.includes(el)).length

    return [el1, el2, el3, el4]
}

console.log(process2Arrays([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 4, 6, 8, 10, 12, 14]))