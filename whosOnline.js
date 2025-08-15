//P: arr of objects
//R: object of propterties that holds arr or {}
//E:
//P:
let listee = [{
    username: 'David',
    status: 'online',
    lastActivity: 10
  }, {
    username: 'Lucy', 
    status: 'offline',
    lastActivity: 22
  }, {
    username: 'Bob', 
    status: 'online',
    lastActivity: 104
  },
  {
    username: 'Lucy', 
    status: 'offline',
    lastActivity: 22
  }
  ]
  const whosOnline = (friends) => {
    //delcare a var of {} with 3 properties
    //loop through the given arr using for of loop 
    //reassign the declared obj prop upon the conditional
    //return the value of the reassigned obj prop
    let result = {
      online: [],
      offline: [], 
      away: []
    }
    
    for(let friend of friends){
      if(friend.status === 'offline'){
        result.offline.push(friend.username)
      }else if(friend.status == 'online' && friend.lastActivity > 10){
        result.away.push(friend.username)
      }else{
        result.online.push(friend.username)
      }
    }
    for(const guests in result) {
      if(result[guests].length === 0) {
        delete result[guests];
      }
    }
    return result
  }