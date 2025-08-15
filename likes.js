//You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
function likes(names) {
    return  names.length == 0?  `no one likes this` :
     names.length == 1? `${names[0]} likes this` :
    names.length == 2? `${names[0]} and ${names[1]} like this` :
    names.length == 3? `${names[0]}, ${names[1]} and ${names[2]} likes this` :
    `${names[0]}, ${names[1]} and ${names.length -2} others like this`
  }