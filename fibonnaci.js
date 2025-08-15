// func takes n param which is a nth in fibanocci seq => return a num corresponding to nth num in the fibanocci seq which is resulted from adding the prev nums. 
// fibanocci seq is a seq of nums where after num is generated from adding the previous 2 numbers
// declare a var seq = [0,1]
// loop to reassign it as a fib seq
function fib(n){
    // if(n <= 1){
    //     return n
    // } else{
    //     return fib(n-1) + fib(n-2)
    // }
    let seq = [0,1]
    for(let i = 2; i <= n; i++){
        let a = seq[i - 1]
        let b = seq[i - 2]
        seq.push(a + b)
    }
    return seq[n]

}
console.log(fib(9))
