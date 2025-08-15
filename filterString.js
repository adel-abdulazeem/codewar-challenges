//Your task is to return a number from a string.

var filterString = function(value) {
    return Number(value.replace(/\D+/g, ''))
  }

