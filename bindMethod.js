function maxRecurrChar(str) {
    let obj = {};
    let maxChar = ''; //pointer to store max recurring char
    let count = 0; // pointer tht tracks the number of max recurring char
    for (const char of str) {
        obj[char] = obj[char] + 1 || 1
    }

    for (const key in obj) {
        if (obj[key] > count) {
            count = obj[key];
            maxChar = key
        }
    }

    return maxChar
}

console.log(maxRecurrChar('aaaaabbcccccccc'))