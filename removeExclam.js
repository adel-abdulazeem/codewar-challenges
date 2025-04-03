
// func takes str of words that contains leading or trailing ! returning a str without '!' at the end of each word
// str as param, always be valid, contains just letters and '!'
// return str where each word without trailing '!'
// consol.log(remove('Hi!!!'), 'Hi')
function remove (string) {
    return string.split(' ').map(el => {
        while(el.endsWith('!')){
            el = el.slice(0, -1)
        }
        return el
    }).join(' ')
  }

  console.log(remove('Hi!!!'), 'Hi')
  console.log(remove('!!!Hi'), '!!!Hi')