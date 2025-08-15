//Create a function which translates a given DNA string into RN
function DNAtoRNA(dna) {
    return dna.split('').map(item => item === 'T'? 'U' : item)
  }