// given arr or terms, if any of those terms relate to Alan partridge, Mine's a Pint!
// he number of exclamation mark (!) after the t should be determined by the number of Alan related terms you find in the given array (x).
// arr of str that might inlcude any terms in side the terms arr
// return a strin of "Mine's a Pint!" and the num of ! is determined by numer of related terms within the input arr
//If you don't find any related terms, return Lynn, I've pierced my foot on a spike!!
function part(x) {
    // create a var of tht holds arr or related terms
    // create a var count tht will be reassigned indicated the num or related tems
    // loop th
    const terms = ["Partridge", "PearTree", "Chat", "Dan", "Toblerone"
        , "Lynn", "AlphaPapa", "Nomad"]
    let count = 0
    for (let i = 0; i < x.length; i++) {
        if (terms.includes(x[i])) {
            count++
        }
    }
    return count > 0 ? `Mine's a Pint${'!'.repeat(count)}` : `Lynn, I've pierced my foot on a spike!!`
}

console.log(part(['Grouse', 'Partridge', 'Pheasant']), 'Mine\'s a Pint!')
console.log(part(['Pheasant', 'Goose', 'Starling', 'Robin']), 'Lynn, I\'ve pierced my foot on a spike!!')
console.log(part(['Grouse', 'Partridge', 'Pheasant', 'Goose', 'Starling', 'Robin', 'Thrush', 'Emu', 'PearTree', 'Chat', 'Dan', 'Square', 'Toblerone', 'Lynn', 'AlphaPapa', 'BMW', 'Graham', 'Tool', 'Nomad', 'Finger', 'Hamster']), 'Mine\'s a Pint!!!!!!!!')