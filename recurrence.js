// recurrence func takes 3 params base, formula, term => number
// 3 params nums, base, formula, term. always valid. +ve/ -ve
// number 
// 1, n => n + 3, 3), 7

function recurrence(base, formula, term) {
    if(term === 1){
    return base
    } else {
    return formula(recurrence(base, formula, term - 1))
    }
  }

  // term === 3
  // n => n + 3
  /*
  function recurrence(base, formula, term) {
    if(term === 1){
    return base
    } else {
    return formula(recurrence(base,  n => n + 3, term - 1))
    }
  } 
  */

    // term === 2
  /*
  function recurrence(base,  n => n + 3, term) {
    if(term === 1){
    return base
    } else {
    return formula(recurrence(base,  n => n + 3, term - 1))
    }
  }// 1 => 1 + 3 = 4
  */

    // term === 1
  /*
  function recurrence(base, formula, term) {
    if(term === 1){
    return base
  }// 1
  */