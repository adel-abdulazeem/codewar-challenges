
//Refactor the following code so that it belongs to a Person class/object, Each Person instance will have a greet method, he Person instance should be instantiated with a name so that it no longer has to be passed into each greet method call.

class Person {
    constructor(name) {
        this.name = name
    }

    greet(yourName) {
        return `Hello ${yourName}, my name is ${this.name}`
    }
}

const joe = new Person('Joe')
console.log(joe.greet('Kate'))
console.log(joe.name)