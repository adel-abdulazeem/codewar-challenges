function Bee(capacity, hive) {
    this.capacity = capacity;
    this.hive = hive;
}

function Hive() {
    this.pollen = 100;
}

//TODO: The amount of honey in the hive is not increasing.
Hive.prototype.addPollen = function (pollen) {
    this.pollen += pollen;
}

Hive.prototype.getPollen = function () {
    return this.pollen;
}
const amount = new Hive()
amount.addPollen(100)

console.log(amount.getPollen())