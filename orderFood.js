//P: arr of objects
//R: object tht includes count of food options selected 
//E: { vegetarian: 2, standard: 1, vegan: 1 }
//P:
function orderFood(list) {
    //delcare var of {}
    //loop 
  
  let orders ={}
    list.forEach( item => {
      if(orders[item.meal]){
        orders[item.meal]++
      }
      else{
        orders[item.meal]  = 1
      }
    })
    return orders
  }