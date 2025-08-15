function solve(s){
    return 'abcdefghijklmnopqrstuvwxyz'.includes([...s].sort().join(''))
}

console.log(solve("abc"), true);
console.log(solve("abd"),false);
console.log(solve("dabc"),true);
console.log(solve("tomqsprn"),false);