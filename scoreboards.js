// write a func that helps to judge the winner based on calculation of the points corresponding to certain food type. 
// arr of 2 objects, always valid, always 2 objects each obj has 4 props, name and the others are food types. 
//should return arr of 2 objects with 2 props name and score and sorted descendingly based on the value of the score prop

function scoreboard(whoAteWhat) {
    // create a var res with []
    //loop through the arr, then loop through each object within the arr summing the total points for each food type and store that value into score
    let res = []
    for (let i = 0; i < whoAteWhat.length; i++) {
        let total = 0;
        for (let obj in whoAteWhat[i]) {
            if (obj !== 'name' && obj === 'chickenwings') {
                total += whoAteWhat[i][obj] * 5
            } else if (obj !== 'name' && obj === 'hamburgers') {
                total += whoAteWhat[i][obj] * 3

            } else if (obj !== 'name' && obj === 'hotdogs') {
                total += whoAteWhat[i][obj] * 2
            }
        }
        res.push({ name: whoAteWhat[i].name, score: total })
    }
    return res.sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.name.localeCompare(b.name)
    })
}

console.log(scoreboard([
    { name: "Habanero Hillary", chickenwings: 5, hamburgers: 17, hotdogs: 11 },
    { name: "Big Bob", chickenwings: 20, hamburgers: 4, hotdogs: 11 }
]))