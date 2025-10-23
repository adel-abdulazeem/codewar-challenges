// function displayLetter(honorific, name, message) {
//     console.log(arguments)
//     console.log(`Dear ${honorific} ${name},`);
//     console.log(message);
//     console.log('Sincerely, A Nigerian Prince.');
// }
// /*
// this does partial function application
// note that it returns a function
// also note that it is not itself the "displayLetterToDoctor" function
// finally, note that it's general: 
// we could pass ANY honorific in, not just "Dr."
// */
// function applyHonorific(honorific) {
//     return function () {
//         displayLetter(honorific, ...arguments);
//     }
// }

// // we need to run the function above to obtain
// // a partially-applied version of displayLetter
// let displayLetterToDoctor = applyHonorific('Dr.');

// // now we can run the partially-applied version of displayLetter
// displayLetterToDoctor('Smith', 'Need $$.'); // logs 'Dear Dr. Smith, [...]'
function test(a, b) {
    console.log(arguments);
}
test(1, 2, 3);
