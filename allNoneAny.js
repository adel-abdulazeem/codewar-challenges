// Array.prototype.all = function (p) {
//     return this.every(el => el < 0)
// };

Array.prototype.all = function (p) {
    return this.filter(p).length === this.length;
};

Array.prototype.none = function (p) {
    return this.filter(p).length === 0;
};

Array.prototype.any = function (p) {
    return this.filter(p).length > 0;
};

console.log(Array.all([1, 3]))