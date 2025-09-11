/**
 * Finds the temperature closest to zero.
 * If two values are equally close (e.g. -2 and 2), the positive one is returned.
 *
 * @param temperatures - Array of measured temperatures
 * @returns The temperature closest to zero, or 0 if array is empty
 */
function closestToZero(temperatures) {
    if (temperatures.length === 0) return 0;
    let closest = temperatures[0];
    for (let temp of temperatures) {
        if (Math.abs(temp) < Math.abs(closest)) {
            closest = temp
        } else if (Math.abs(temp) === Math.abs(closest) && temp > closest) {
            closest = temp
        }
    }
    return closest
}

// Example usage:
console.log(closestToZero([6.5, 7, 3.5, -3.7, -6.2, 9.6, -12])); // Output: -3.7
console.log(closestToZero([7.2, 2.4, 9.6, -5.7, 4]));            // Output: 2.4
console.log(closestToZero([]));                                  // Output: 0
