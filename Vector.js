// create a Vector class with x and y att tht represent comp magnitudes in the x and y dir, should handle vector addition with an add() that takes a 2nd verctor as an arg & returns a new vector equal to ths um of the vector you call .add() on and the vector you pass in 


class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y)

    }
}

const a = new Vector(3, 4)
const b = new Vector(1, 2)

console.log(a.x, a.y, a.add())

const c = a.add(b)
console.log(c.x)
