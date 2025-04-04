// This Cube class needs help
// Implement the constructor so that it can take an integer for the side or no args
class Cube {
    constructor(side) {
        this.side = side || 0
    }
    getSide() {
        if (this.side < 0) {
            return this.side * -1
        }
        return this.side
    }

    setSide(n) {
        this.side = Math.abs(n);
    }
}