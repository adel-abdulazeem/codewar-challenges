// arr of str each str is composed of 1st&2nd name
// the given arr sorted according to their last name
// 
// loop spliting each el by ' ' then  then reverse  join by ' ' the result then sort it 
//loop again split each el by ' '  then reverse then join by ' '
//conditional to determine if each el has identical last name
// some method



function sortReindeer(reindeerNames) {
    let sortLast = reindeerNames.map(el => el.split(' ').reverse().join(' ')).sort()
  let lastName = sortLast.map(el => el.split(' ')[0])
    return lastName[0] === lastName[1]? reindeerNames : sortLast.map(el => el.split(' ').reverse().join(' '))
  }
  

  console.log(sortReindeer([ 'Akira Mori', 'Kenjiro Mori', 'Susumu Mori' ]))