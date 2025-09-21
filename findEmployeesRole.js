// write a func that receives a str and should check if tht str is included into a preloaded arr of obj as 1st and last name then return the value correspoinding role prop.
// str params, with spaced bt 1st and last name, always valid
// return a str whether the value of the role prop in the preloaded obj or "Does not work here!" if the preloaded arr of obj doesn't include that name
// 

let employees = [
    { firstName: "Dipper", lastName: "Pines", role: "Boss" },
    { firstName: "Morty", lastName: "Smith", role: "Truck Driver" },
    { firstName: "Anna", lastName: "Bell", role: "Admin" }
]

function findEmployeesRole(name) {
    //create a var that holds arr of 2 el resulting from the name input as 1st and last name 
    // loop through the employees arr using for in loop 
    // conditional to check if includes the 1st and 2nd name then return the role 
    // otherwise return the "Don't work here"
    let names = name.split(' ')
    for (let employee of employees) {
        if (employee.firstName.includes(names[0]) && employee.lastName.includes(names[1])) {
            return employee.role
        }
    }
    return "Does not work here!"
}

console.log(findEmployeesRole("Dipper Pines"), "Does not work here!")
console.log(findEmployeesRole("Morty Smith"), "Truck Driver")
console.log(findEmployeesRole("Anna Bell"), "Admin")