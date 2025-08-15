function replicate(times, number){
    if(times < 1){
        return []
    } else {
        return [number].concat(replicate(times-1,number))
    }
}