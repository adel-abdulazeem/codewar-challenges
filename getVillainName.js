function getVillainName(birthday){
    const formattedDate = birthday.toLocaleDateString("en-US", { month: "long", day: "numeric" });
  
    const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
    const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
    const months = {
      'January': 'Evil',
      'February': 'Vile',
      'March': 'Cruel',
      'April': 'Trashy',
      'May': 'Despicable',
      'June': 'Embarrassing',
      'July': 'Disreputable',
      'August': 'Atrocious',
      'September': 'Twirling',
      'October': 'Orange',
      'November': 'Terrifying',
      'December': 'Awkward',
    }
    let res = ''
    const arr = formattedDate.split(' ')
    for(let i = 0; i < 1; i++){
      if(months[arr[0]]){
        res += `The ${months[arr[0]]} ${d[arr[1][arr[1].length - 1]]}`
      }
    }
    return res
  }