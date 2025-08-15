function broken(x){
    //P: str of binary
    //R: str of the photocopier 
    //E: 
    //P: 
    //conditional and replace swinging bt 1 & 0
    return x.split('').map(item => item == '1'? '0' : '1').join('')
    }