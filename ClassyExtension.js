//  preloaded with the Animal class, so you should only edit the Cat class.
// task is to complete the Cat class which extends Animal and replace the speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'

class Cat extends Animal {
    constructor(name) {
        super(name)
    }
    speak() {
        return `${this.name} meows.`
    }
}