// create a js class called Animal tht takes in name and type arg, have toString method tht return a human readable string indicating the arg infor passed in. allowthe name property to bet set


class Animal {
    constructor(name, type) {
        this.name = name
        this.type = type
    }
    toString() {
        return `${this.name} is a ${this.type}`
    }
}
let dog = new Animal('Max', 'dog');
console.log(dog.toString()); // should return 'Max is a dog'
console.log(dog.type); // should == 'dog'
console.log(dog.name); // should == 'Max'
dog.name = 'Lassie'; // should set name to 'Lassie'
console.log(dog.name)