// write a function tht takes 2 params 1st is a num which represent the salary and 2nd is an arr of num tht represent the bills to be paid and return the num which reference how many 5$ can be gotten from the result of stubracting the bills from the salary
// 2 args, 1st is num +ve always valid, 2nd is arn arr of nums, always valid.
// return a num which reflects how many 5$ can be gotten from result of subracting the sum of bills from the salary || 0 if doesn't allow you to get any £5 notes return 0
//
function getNewNotes(salary, bills) {
    // create a var called totalBills that holds the sum of the total bills withing the bills arr
    const totalBills = bills.reduce((acc, c) => acc + c, 0);
    const diff = Math.floor((salary - totalBills) / 5)
    return diff >= 1 ? diff : 0
}

console.log(getNewNotes(2000, [500, 160, 400]), 188);
console.log(getNewNotes(1260, [500, 50, 100]), 122);
console.log(getNewNotes(3600, [1800, 350, 460, 500, 15]), 95);
console.log(getNewNotes(10000, [1800, 500, 1200, 655, 150]), 1139);
console.log(getNewNotes(2300, [590, 1500, 45, 655, 150]), 0)