// write Block class with 3 method getWidth(), getLength(), getVolume(), getSurfaceArea(), that creates block instance.
// constructor should take an arr as arg containing 3 intg of form [w, l, h] from which the Block should be created 


class Block {

    constructor(data) {
        this.width = data[0]
        this.length = data[1]
        this.height = data[2]
    }
    getWidth() {
        return this.width
    }
    getLength() {
        return this.length
    }
    getHeight() {
        return this.height
    }
    getVolume() {
        let { width, length, height } = this
        return width
    }
    getSurfaceArea() {
        return 2 * ((this.width * this.length) + (this.length * this.height) + (this.width * this.height))
    }
}

let b = new Block([2, 4, 6])

console.log(b.getHeight())
console.log(b.getVolume())
console.log(b.getSurfaceArea())