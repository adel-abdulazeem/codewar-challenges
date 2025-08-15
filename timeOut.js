// func
// func fn, arr args, time t num
// return arr 
var cancellable = function(fn, args, t) {
    const timeoutId = setTimeout(() => {
        return [{'time': `${t}`, 'returned': `${fn(...args)}`}]
        }, t)
    return function cancelFn(){
        clearTimeout(timeoutId);
    }
};