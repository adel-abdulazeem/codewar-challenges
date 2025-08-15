var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";

    // Start with the first string as the prefix
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        // Compare the prefix with the current string
        while (strs[i].indexOf(prefix) !== 0) {
            // Shorten the prefix
            prefix = prefix.slice(0, -1);

            // If the prefix becomes empty, return ""
            if (!prefix) return "";
        }
    }

    return prefix;
};

console.log(longestCommonPrefix(["flower","flow","rlight"]))// 'fl'
console.log(longestCommonPrefix(["dog","racecar","car"]))// ''
console.log('flight'.indexOf('fl'))