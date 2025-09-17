//func takes 2D arr of non-negative intg pairs, return the sum of all the  have getting the LCM of each couple of number compared to their simple product.
// 



function sumDifferencesBetweenProductsAndLCMs(pairs) {
    function gcd(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b !== 0) {
            const t = a % b;
            a = b;
            b = t;
        }
        return a;
    }
    let total = 0;
    for (let [a, b] of pairs) {
        let prod = a * b;
        const g = gcd(a, b);
        const lcm = (g === 0) ? 0 : prod / g;
        total += (prod - lcm)
    }
    return total
}

console.log(sumDifferencesBetweenProductsAndLCMs([[15, 18], [4, 5], [12, 60]]), 840);
console.log(sumDifferencesBetweenProductsAndLCMs([[1, 1], [0, 0], [13, 91]]), 1092)
