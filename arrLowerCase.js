//arr of str or non-str items
//arr of str lowercased
//arrayLowerCase(['Red', 'Green']) == ['red', 'green']
// loop passing a callback method that is applied on each el to makes it a lowercased upon conditional

function arrayLowerCase(arr) {
    return arr.map(el => el.toLowerCase() || el)
  }