class Class {
    static number = 1

    static getNumber() {
        const currentVal = Class.number
        Class.number *= 2
        return currentVal
    }
}

console.log(Class.getNumber());
// console.log(Class.getNumber());
// console.log(Class.getNumber());

console.log(Class.number)