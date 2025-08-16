//Create a function that takes in a list of button inputs and returns the final state.
// arr/list of button inputs state, 
// returns like || dislike || nothing based on conditional
// return one of the inputs based on that last state overwrites the prev one
// 


function likeOrDislike(buttons) {
    // create a var tht holds def value
    // loop through input arr
    // conditional if button's state is same as current state, then state should be reassigned to be Nothing overwriting its value
    // else reassign state with current button's state
    let state = 'Nothing';
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i] === state) {
            state = 'Nothing'
        } else {
            state = buttons[i]
        }
    }
    return state
}

console.log(likeOrDislike(['Like', 'Like', 'Dislike', 'Dislike']))