var lengthOfLastWord = function(s) { 
    let last = s.trim().split(' ').map(el => el.length)
    return last[last.length - 1]
}