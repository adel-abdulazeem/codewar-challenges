var frequencySort = function(s) {
    let charMap = {}
    for(const char of s){
        charMap[char] = charMap[char] + 1 || 1
    }


return s.split('').sort((a,b) => charMap[b] - charMap[a] || a.localeCompare(b)).join('')
/*
 const counter = new Map();
    for (const char of s) {
        counter.set(char, (counter.get(char) || 0) + 1);
    }
    
    const pq = Array.from(counter.entries());
    pq.sort((a, b) => b[1] - a[1]);
    
    let result = '';
    for (const [char, freq] of pq) {
        result += char.repeat(freq);
    }
    
    return result;
 */
};

console.log(frequencySort('loveleetcode'))