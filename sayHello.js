
// sayHello
//P: 3, the 1st is an arr
//R: template literal containing greeting and joining the elements of the 1st para
//E: 
//P:
function sayHello( name, city, state ) {
    //use backticks and template literals
    //${} to compute joining arr elements using join method with space separated
    //${} to compute the 2nd argument 'the city'
    //${} to compute the 3rd argument 'the state'
    //add 2 comma one after the greeting and the other after the sentance
    //add 2 !mark one after the joined name and the other after the state
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')