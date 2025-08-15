
//write a function that return a function that can only be called once

const once = (fn) => {
    let called = false;
    let res 
    return (...args)=>{
        if(!called){
            called = true;
            res = fn(...args)
            return res
        }else{
            return undefined

        }
    }
}
const fn = (a,b,c) => (a + b + c)
const onceFn = once(fn);

console.log(onceFn(1,2,3)) // 6
console.log(onceFn(1,2,3)) // 6