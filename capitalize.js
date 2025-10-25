String.prototype.capitalize = function () {
    const searchArray = 'abcdefghijklmnopqrstuvwxyz';
    const replaceArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const arr = this.split('')
    const index = searchArray.indexOf(arr[0])
    if (index > -1) arr[0] = replaceArray[index];
    return arr.join('')
}

console.log('An apple a day keeps the doctor away'.capitalize())