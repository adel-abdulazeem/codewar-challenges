  //Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
  function correct(string){
    return string.split('').map(item => item == '5'? 'S' : item == '0'? 'O' : item == '1'? 'I' : item)
  }
