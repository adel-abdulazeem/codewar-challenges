//str of words 
// new str with pak word inserted bt each 2 words
// 'Man I need a taxi up to Ubud'), 'Man pak I pak need pak a pak taxi pak up pak to pak Ubud');
//
function pak(s){
    //split the given str 
    //loop through adding a pak word to each one
    let arr = s.split(' ').map(el => el.length > 0? el + ' pak ' : el).join('')
    return arr.split(' ').slice(0,-2).join(' ')
    }
    
    console.log(pak('Man I need a taxi up to Ubud'))