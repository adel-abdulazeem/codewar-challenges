// Go ahead and define your class :)
class Cube {
    constructor(length) {
        this.length = length
    }

    get surfaceArea() {
        return 6 * this.length ** 2;
    }

    set surfaceArea(area) {
        this.length = Math.sqrt(area / 6);
    }

    get volume() {
        return this.length ** 3
    }

    set volume(vol) {
        this.length = Math.cbrt(vol);
    }
}

const cube = new Cube(3)

console.log(cube.volume)