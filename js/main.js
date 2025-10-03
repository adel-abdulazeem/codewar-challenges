// write a func that takes fn as arg and it return a num

const match = /^(\d{2}):(\d{2}):(\d{2})$/.exec('11:70:10');
console.log(match)


class Person {
    talk() {
        return 'Talking'
    }
}

const me = new Person;
const you = new Person;
Person.prototype.talk = function () {
    return 'improve talking'
}
console.log(me.talk())
console.log(Person.prototype === me.__proto__)
console.log(me.prototype)
