//P: arr of str
//R: arr of str each str with 1st name capitalized
//E: capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
//P

function capMe(names) {
    //loop converting each el into lowecase
    //then each el 1st letter into uppercase
    return names.map(el => el[0].toUpperCase() + el.toLowerCase().slice(1))
    }
    
    console.log(capMe(['KARLY', 'DANIEL', 'KELSEY']))