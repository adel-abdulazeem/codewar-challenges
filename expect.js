// func takes any val return an obj with the 2 func toBe(val) and notTobe(val)
// expect func should any val/ toBe(val) & notToBe(val) accepts another val
// expect should return an obj that contains 2 func toBe(val) & notToBe(val) that should true || false based on comparing ther passed value with val passed to their parent funct expect
// return {'value': true} if the passed values are equal or {"error": "Not Equal"} if they are not equal 

var expect = function(val) {
    let parentVal = val
return {
    toBe: (val) => {
        if(parentVal === val){
            return true
        } else{
            throw new Error("Not Equal")
        }
    },
    notToBe: (val) => {
            if(parentVal !== val){
                return  true
        } else{
            throw new Error('Equal')
        }
    }
}
};

const isEqual = expect(5)
console.log(isEqual.notToBe(6))
