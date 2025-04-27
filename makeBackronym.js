//preload variable: dict


var makeBackronym = function(string){
    return string.toUpperCase().split('').map(str => dict[str]).join(' ')
  };