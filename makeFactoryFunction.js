function makeClass(...properties) {
    return class {
        constructor(...props) {
            properties.forEach((prop, index) => {
                this[prop] = props[index]
            })
        }
    }
}



const animal = makeClass("name", "species", "age", "health", "weight", "color");

console.log(makeClass("name", "species", "age", "health", "weight", "color"))