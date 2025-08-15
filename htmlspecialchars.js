//P: str includes special char
//R: new str without those special char
//E: 
//P: 




function htmlspecialchars(formData) {
    //split the str param by char
    //map through each char
    //conditional
    return formData.split('').map(item => {
      return item == '<'? '&lt;' : item == '>'? '&gt;' : item == '"'? '&quot;' : item == '&'? '&amp;' : item
    }).join('')
    }

    console.log(htmlspecialchars("<script>alert('Website Hacked!');</script>"))