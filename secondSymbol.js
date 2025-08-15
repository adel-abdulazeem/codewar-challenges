//func takes a str and letter as params, return the index of the sec occur of tht letter in the str otherwise return -1 if there is not such letter in the str
//

function secondIndex(str, letter) {
    // indexOf takes 2 params first is the char, second is fromIndex
  // Find first occurrence
  const first = str.indexOf(letter);
  if (first === -1) return -1;

  // Find second occurrence, starting just after the first
  const second = str.indexOf(letter, first + 1);
  return second;
}

console.log(secondIndex("Heleelo world!!!", 'l' ))
console.log(secondIndex("Hello world!!!", 'A' ))
console.log(secondIndex('IcZdHBupkCSBDHBcFfrpqUSloXudFtlRrNuvhCJoZStZ', 'R:'))